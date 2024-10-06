/** @format */

var webPageElement;
var searchSectionElement;
var logoElement;
var searchContainerElement;
var searchInputElement;
var autoCompleteSectionElement;
var clearSearchButton;
var responseSectionElement;
var responseContainerElement;

// DOM manipulation
const getElement = (query) => document.querySelector(query);
const getElements = (query) => document.querySelectorAll(query);
const createElement = (_element) => document.createElement(_element);
const addClass = (_element, _class) => _element.classList.add(_class);
const removeClass = (_element, _class) => _element.classList.remove(_class);
const addElement = (_parentElement, _childElement) =>
	_parentElement.append(_childElement);
const addText = (_element, _message) => (_element.innerHTML = _message);
const setAttribute = (_element, _key, _value) =>
	_element.setAttribute(_key, _value);
const getAttribute = (_element, _key) => _element.getAttribute(_key);

// ---> on page load
window.addEventListener("load", (event) => {
	// assigning variables
	webPageElement = getElement("#web-page");
	searchSectionElement = getElement("#search-section");
	logoElement = searchSectionElement.children[0];
	autoCompleteSectionElement = getElement("#autocomplete-box");
	searchContainerElement = getElement("#search-container");
	searchInputElement = getElement("#search-input-box");
	clearSearchButton = getElement("#clear-search-button");
	responseSectionElement = getElement("#response-section");

	// event listeners
	searchSectionElement?.addEventListener("click", onClickInSearchSection);
	webPageElement?.addEventListener("click", removeSuggestions);
	searchInputElement?.addEventListener("keyup", onSearchedTextChange);
});

// ---> event handling
// on user clicked in search section
function onClickInSearchSection(event) {
	event.stopPropagation(); // stop bubling

	// 4 events handle here -->
	// 1. If suggestions are not visible make visisble
	// 2. If user select suggestion then search suggestion for search and close section
	// 3. If user try to delete suggestion then delete suggestion with no section close
	// 4. If user clicked on clear text button clear text from search

	const actionElement = findActionElement(event.target);

	// remove searched text
	if (actionElement.id === "clear-search-button") {
		searchInputElement.value = "";
		onSearchedTextChange();
	}
	// show suggestions
	else if (autoCompleteSectionElement.children.length === 0) {
		// recent searched data - recent 10
		const resentSearchedList = JSON.parse(
			localStorage.getItem("weather-recent-search")
		);
		showSuggestions(resentSearchedList);
	} else {
		if (actionElement.tagName !== "BODY") {
			// remove suggestion
			if (actionElement.classList.contains("suggestion-remove-button")) {
				const suggestionElement = actionElement.parentNode;
				const place = JSON.parse(
					getAttribute(suggestionElement, "place")
				);
				removeSuggestion(place, suggestionElement);
			}
			// suggestion
			else if (actionElement.classList.contains("suggestion")) {
				const place = JSON.parse(getAttribute(actionElement, "place"));

				searchSuggestedPlace(place);
			}
		}
	}
}
// on text change in input
function onSearchedTextChange(event) {
	const searchText = searchInputElement.value ?? "";
	clearSearchButton.style.display = searchText.length > 0 ? "block" : "none";
}
// on search new place
function toSearch(event) {
	event.preventDefault();
	if (searchInputElement.value.length > 0) {
		clearSearchAndResponseData();
		searchedParamerter.place = searchInputElement.value;
		searchWeatherForecastPromise();
	}
}
// hour selected
function onHourlyForecastSelected(_index) {
	if (activeHourIndex !== _index) {
		// update active hour forecast index
		const _oldIndex = activeHourIndex;
		activeHourIndex = _index;
		const _forecastData = hourlyForecast[activeHourIndex];

		// update weather image, sky color and weather text
		const resopnseHeaderElement = responseContainerElement.children[0];
		resopnseHeaderElement.style.background =
			_forecastData?.condition?.sky ?? ""; // sky
		const resopnseImageElement = resopnseHeaderElement.children[0];
		setAttribute(
			resopnseImageElement,
			"src",
			_forecastData?.condition?.icon
		); // weather image
		const resopnseWeatherConditionElement =
			resopnseHeaderElement.children[1];
		resopnseWeatherConditionElement.innerHTML =
			_forecastData?.condition?.text; // weather condition

		// update prediction data
		const predictionEelments =
			responseContainerElement.children[1].children[0].children;
		// index 0 : rain
		predictionEelments[0].children[1].innerHTML =
			_forecastData?.chance_of_rain > 0
				? `${_forecastData?.precip_mm} mm`
				: ""; // rain extra data
		predictionEelments[0].children[2].innerHTML = `${_forecastData?.chance_of_rain}% chance of rain`; // rain data

		// index 1: snow
		predictionEelments[1].children[2].innerHTML = `${_forecastData?.chance_of_snow}% chance of snow`; // snow data

		// update current data
		const currentDataEelments =
			responseContainerElement.children[2].children[0].children;
		currentDataEelments[0].children[2].innerHTML = `${_forecastData?.temp_c} &deg;C`; // temprature
		currentDataEelments[1].children[2].innerHTML = `${_forecastData?.humidity}%`; // humidity
		currentDataEelments[2].children[1].innerHTML = `${_forecastData?.wind_kph} km/h`; // wind extra data
		currentDataEelments[2].children[2].innerHTML = `${_forecastData?.wind_degree}&deg; to ${_forecastData?.wind_dir}`; // wind data
		currentDataEelments[3].children[2].innerHTML = `${_forecastData?.uv} nm`; // uv rays

		// hourly forecast
		const hourlyForecastElmenets =
			responseContainerElement.children[3].children[1].children;
		hourlyForecastElmenets[_oldIndex].children[1].remove(); // remove old selcetd forecast card indicator
		// create new selected forecast card indicator
		const indicatorElement = createElement("p");
		indicatorElement.innerHTML =
			_forecastData.day_index === 0 &&
			_forecastData.time.getHours() ===
				wetherData[0].current_date.getHours()
				? "Now"
				: "Visible";
		addClass(indicatorElement, "forecast-indicater");
		addElement(hourlyForecastElmenets[activeHourIndex], indicatorElement);
	}
}

// ---> DOM manipulation
function showSuggestions(resentSearchedList) {
	// if suggestions available
	if (resentSearchedList.length > 0) {
		resentSearchedList.sort((a, b) => b.time - a.time); // sort based on time - recent on top
		searchContainerElement.style.backgroundColor =
			COLORS.secondryBackground; // highlight color

		// creating suggestions
		const suggestionListElement = createElement("ul"); // list containrs suggestions
		addClass(suggestionListElement, "suggestion-list-Container");

		const autoCompleteDividerElement = createElement("li"); // divider seperate from search to suggestions
		addClass(autoCompleteDividerElement, "auto-complete-divider");
		addElement(suggestionListElement, autoCompleteDividerElement);

		// itrate adn create each suggestion
		resentSearchedList.forEach((item) => {
			const suggestionElement = createElement("li");
			addClass(suggestionElement, "suggestion");
			setAttribute(suggestionElement, "place", JSON.stringify(item));

			// icon
			const suggestionIconContainer = createElement("div");
			addClass(suggestionIconContainer, "suggestion-list-icon-container");
			const suggestionIcon = createElement("img");
			addClass(suggestionIcon, "suggestion-icon");
			setAttribute(suggestionIcon, "src", "./assets/final/clock.svg");
			setAttribute(suggestionIcon, "alt", "suggestion");
			addElement(suggestionIconContainer, suggestionIcon);
			addElement(suggestionElement, suggestionIconContainer);

			// place
			const suggestionPlaceElement = createElement("div");
			addText(suggestionPlaceElement, item.place);
			addClass(suggestionPlaceElement, "suggestion-place");
			addElement(suggestionElement, suggestionPlaceElement);

			// delete option
			const suggestionDeleleButton = createElement("button");
			addClass(suggestionDeleleButton, "suggestion-remove-button");
			const suggestionDeleteIcon = createElement("img");
			addClass(suggestionDeleteIcon, "suggestion-remove-button-icon");
			setAttribute(
				suggestionDeleteIcon,
				"src",
				"./assets/final/cross.svg"
			);
			setAttribute(suggestionDeleteIcon, "alt", "remove suggestion");
			addElement(suggestionDeleleButton, suggestionDeleteIcon);
			addElement(suggestionElement, suggestionDeleleButton);

			addElement(suggestionListElement, suggestionElement);
		});

		addElement(autoCompleteSectionElement, suggestionListElement);
	}
}
function removeSuggestions() {
	if (autoCompleteSectionElement.children.length > 0) {
		searchContainerElement.style.backgroundColor = "inherit";
		autoCompleteSectionElement.children[0].remove();
	}
}
function findActionElement(element) {
	let _element = element;

	while (_element.tagName !== "BODY") {
		if (_element.classList.contains("suggestion-remove-button")) break; // remove suggestion
		if (_element.classList.contains("suggestion")) break; // suggestion
		if (_element.id === "clear-search-button") break; // remove searched text

		_element = _element.parentNode;
	}

	return _element;
}
function searchSuggestedPlace(place) {
	const updatedPlace = { ...place, time: new Date().getTime() };
	updateSearchParameter(updatedPlace);
	searchInputElement.value = place.place;
	searchWeatherForecastPromise();
}
function removeSuggestion(place, suggestionElement) {
	const updatedRecentSearch = removePlaceFromRecentSearch(place);
	suggestionElement.remove(); // remove element from DOM

	// no point to show empty seggation section
	if (updatedRecentSearch.length === 0) {
		removeSuggestions();
	}
}
function createLoader() {
	// loader contaienr
	let loaderContainerElement = createElement("section");
	loaderContainerElement.id = "loader-container";

	// loader image
	const loaderImageElement = createElement("img");
	setAttribute(
		loaderImageElement,
		"src",
		WEATHER_IMAGES.OTHER.LOADER_ANIMATION
	);
	setAttribute(loaderImageElement, "alt", "loader");
	loaderImageElement.id = "loader-image";
	loaderContainerElement.append(loaderImageElement);

	// loader message
	const loaderMessageElement = createElement("p");
	loaderMessageElement.id = "loader-message";
	loaderMessageElement.innerHTML = TEXT.LOADER_MESSAGE(
		searchedParamerter?.place
	);
	loaderContainerElement.append(loaderMessageElement);

	// add to DOM
	webPageElement.append(loaderContainerElement);
}
function createResponseContainer() {
	// weather data
	const _hourWeatherData = hourlyForecast[activeHourIndex];

	// response container
	responseContainerElement = createElement("div");
	responseContainerElement.id = "response-container";

	// weather header section
	const resopnseHeaderElement = createElement("header");
	resopnseHeaderElement.id = "response-header";
	resopnseHeaderElement.style.background =
		_hourWeatherData?.condition?.sky ?? "";

	// weather image
	const resopnseWeatherImageElement = createElement("img");
	setAttribute(
		resopnseWeatherImageElement,
		"src",
		_hourWeatherData?.condition?.icon ?? ""
	);
	setAttribute(resopnseWeatherImageElement, "alt", "weather image");
	addClass(resopnseWeatherImageElement, "response-weather-image");
	addElement(resopnseHeaderElement, resopnseWeatherImageElement);

	// weather condition
	const responseWetherConditionElement = createElement("h3");
	responseWetherConditionElement.innerHTML =
		_hourWeatherData?.condition?.text ?? "";
	addClass(responseWetherConditionElement, "response-weather-condition");
	addElement(resopnseHeaderElement, responseWetherConditionElement);

	// weather place
	const responseWetherPlaceElement = createElement("h2");
	responseWetherPlaceElement.innerHTML = searchedParamerter?.place ?? "";
	addClass(responseWetherPlaceElement, "response-weather-place");
	addElement(resopnseHeaderElement, responseWetherPlaceElement);

	addElement(responseContainerElement, resopnseHeaderElement);
	addElement(responseSectionElement, responseContainerElement);
}
function cardBuilderHOF(_title, _data, _extraData, _icon) {
	// card
	const cardElement = createElement("div");
	addClass(cardElement, "response-box");

	// icon
	const cardIconElement = createElement("img");
	setAttribute(cardIconElement, "src", _icon ? _icon.icon : "");
	setAttribute(cardIconElement, "alt", _icon ? _icon.alt : "");
	addClass(cardIconElement, "response-box-icon");
	addElement(cardElement, cardIconElement);

	// extra data
	const extraDataElement = createElement("p");
	extraDataElement.innerHTML = _extraData ?? "";
	addClass(extraDataElement, "response-box-extra-data");
	addElement(cardElement, extraDataElement);

	// data
	const dataElement = createElement("p");
	dataElement.innerHTML = _data;
	addClass(dataElement, "response-box-data");
	addElement(cardElement, dataElement);

	// title
	const titleElement = createElement("h4");
	titleElement.innerHTML = _title;
	addClass(titleElement, "response-box-title");
	addElement(cardElement, titleElement);

	return cardElement;
}
function sectionBuilderHOF(_section, _sectionTitle, _container) {
	const sectionElement = createElement("section");
	addClass(sectionElement, _section);

	let sectionTitleElement = null;
	if (_sectionTitle) {
		sectionTitleElement = createElement("h3");
		sectionTitleElement.innerHTML = _sectionTitle.title;
		addClass(sectionTitleElement, _sectionTitle.class);
		addElement(sectionElement, sectionTitleElement);
	}

	const containerElement = createElement("div");
	addClass(containerElement, _container);
	addElement(sectionElement, containerElement);

	return {
		section: sectionElement,
		title: sectionTitleElement,
		container: containerElement,
	};
}
function displayPredictions(callback) {
	// weather data
	const _hourWeatherData = hourlyForecast[activeHourIndex];

	// prediction section
	const _base = sectionBuilderHOF(
		"prediction-section",
		null,
		"prediction-container"
	);

	// rain prediction
	const rainPredictionBoxElement = cardBuilderHOF(
		"Rain",
		`${_hourWeatherData?.chance_of_rain}% chance of rain`,
		_hourWeatherData?.chance_of_rain > 0
			? `${_hourWeatherData?.precip_mm} mm`
			: null,
		{ icon: "./assets/final/rain.svg", alt: "rain icon" }
	);
	addElement(_base.container, rainPredictionBoxElement);
	// snow prediction
	const snowPredictionBoxElement = cardBuilderHOF(
		"Snow",
		`${_hourWeatherData?.chance_of_snow}% chance of snow`,
		null,
		{ icon: "./assets/final/snow.svg", alt: "snow icon" }
	);
	addElement(_base.container, snowPredictionBoxElement);

	// prediction section append to response container
	addElement(responseContainerElement, _base.section);

	callback();
}
function displayCurrentData(callback) {
	// weather data
	const _hourWeatherData = hourlyForecast[activeHourIndex];

	// current section
	const _base = sectionBuilderHOF("data-section", null, "data-container");

	// temprature
	const tempratureBoxElement = cardBuilderHOF(
		"Temprature",
		`${_hourWeatherData?.temp_c} &deg;C`,
		null,
		{ icon: "./assets/final/temp.svg", alt: "temprature icon" }
	);
	addElement(_base.container, tempratureBoxElement);

	// humidity
	const humidityBoxElement = cardBuilderHOF(
		"Humidity",
		`${_hourWeatherData?.humidity}%`,
		null,
		{ icon: "./assets/final/humidity.svg", alt: "humidity icon" }
	);
	addElement(_base.container, humidityBoxElement);

	// wind
	const windBoxElement = cardBuilderHOF(
		"Wind",
		`${_hourWeatherData?.wind_degree}&deg; to ${_hourWeatherData?.wind_dir}`,
		`${_hourWeatherData?.wind_kph} km/h`,
		{ icon: "./assets/final/wind.svg", alt: "wind icon" }
	);
	addElement(_base.container, windBoxElement);

	// uv
	const uvBoxElement = cardBuilderHOF(
		"UV Rays",
		`${_hourWeatherData?.uv} nm`,
		null,
		{
			icon: "./assets/final/uv.svg",
			alt: "UV icon",
		}
	);
	addElement(_base.container, uvBoxElement);

	// section append to response container
	addElement(responseContainerElement, _base.section);

	callback();
}
function displayHourlyForecastData(callback) {
	// forecast section
	const _base = sectionBuilderHOF(
		"forecast-section",
		{ title: "Hourly Forecast", class: "section-title" },
		"forecast-container"
	);

	hourlyForecast.forEach((_forecast, index) => {
		const indicatorWrapperElement = createElement("div");
		addClass(indicatorWrapperElement, "forecast-card-wrapper");
		addElement(_base.container, indicatorWrapperElement);

		// forecast card
		const forecastCardElement = createElement("div");
		addClass(forecastCardElement, "forecast-card");
		addElement(indicatorWrapperElement, forecastCardElement);
		forecastCardElement.addEventListener("click", (event) => {
			onHourlyForecastSelected(index);
		});

		// forecast icon
		const forecastIconElement = createElement("img");
		setAttribute(forecastIconElement, "src", _forecast.condition.icon);
		setAttribute(forecastIconElement, "alt", "forecast icon");
		addClass(forecastIconElement, "forecast-card-icon");
		addElement(forecastCardElement, forecastIconElement);
		// forecast temprature
		const forecastTempratureElement = createElement("p");
		forecastTempratureElement.innerHTML = `${_forecast?.temp_c} &deg;C`;
		addClass(forecastTempratureElement, "forecast-card-temprature");
		addElement(forecastCardElement, forecastTempratureElement);
		// forecast time
		const forecastTimeElement = createElement("h5");
		const _time =
			_forecast.time.getHours() > 12
				? _forecast.time.getHours() - 12
				: _forecast.time.getHours();
		forecastTimeElement.innerHTML = `${_time ? _time : 12} ${
			_forecast.time.getHours() > 12 ? "PM" : "AM"
		}`;
		addClass(forecastTimeElement, "forecast-card-title");
		addElement(forecastCardElement, forecastTimeElement);

		// if card selected
		if (index === activeHourIndex) {
			const indicatorElement = createElement("p");
			indicatorElement.innerHTML =
				_forecast.day_index === 0 &&
				_forecast.time.getHours() ===
					wetherData[0].current_date.getHours()
					? "Now"
					: "Visible";
			addClass(indicatorElement, "forecast-indicater");
			addElement(indicatorWrapperElement, indicatorElement);
		}
	});

	// section append to response container
	addElement(responseContainerElement, _base.section);

	callback();
}

// ---> animation
async function animateSearchSection(callback) {
	let id = null;
	let _top = searchSectionElement.style.top[0]
		? Number(searchSectionElement.style.top)
		: 30;
	let _width = 350;
	let _marginRight = 0;
	let _marginBottom = 1;

	// animation
	clearInterval(id);
	function moveSearchBar() {
		if (_top > 0) {
			_top--;
		}
		if (_width > 200) {
			_width -= 11;
		}
		if (_marginRight < 2) {
			_marginRight = Number((_marginRight + 0.1).toFixed(1));
		}
		if (_marginBottom > 0) {
			_marginBottom = Number((_marginBottom - 0.1).toFixed(1));
		}

		searchSectionElement.style.top = `${_top}%`;
		logoElement.style.width = `${_width}px`;
		logoElement.style.marginRight = `${_marginRight}rem`;
		logoElement.style.marginBottom = `${_marginBottom}rem`;

		if (_width <= 230) {
			searchSectionElement.style.flexDirection = "row";
		}

		if (
			_top <= 0 &&
			_width <= 200 &&
			_marginRight >= 2 &&
			_marginBottom <= 0
		) {
			logoElement.style.position = "relative";
			logoElement.style.top = "-20px";

			clearInterval(id);
			callback();
		}
	}

	if (_top >= 3) {
		searchSectionElement.style.alignItems = "flex-start";
		id = setInterval(moveSearchBar, 8);
	} else {
		callback();
	}
}
async function animateLoaderEntry(callback) {
	let id = null;
	let _left = 20;
	let _opacity = 0;
	const loaderContainerElement = document.getElementById("loader-container");

	// animation
	clearInterval(id);
	function moveLoaderForEntry() {
		if (_left < 50) _left += 0.5;
		if (_opacity < 1) _opacity += 0.02;

		loaderContainerElement.style.left = `${_left}%`;
		loaderContainerElement.style.opacity = _opacity;

		if (_left >= 50 && _opacity >= 1) {
			clearInterval(id);
			// wait for 1 sec to animation visiabe to user
			setTimeout(() => {
				callback();
			}, 1500);
		}
	}
	if (_left <= 50) {
		id = setInterval(moveLoaderForEntry, 13);
	} else {
		callback();
	}
}
async function animateLoaderExit(callback) {
	let id = null;
	let _left = 50;
	let _opacity = 1;
	const loaderContainerElement = document.getElementById("loader-container");

	// animation
	clearInterval(id);
	function moveLoaderForExit() {
		if (_left < 80) _left += 0.5;
		if (_opacity > 0) _opacity -= 0.02;

		loaderContainerElement.style.left = `${_left}%`;
		loaderContainerElement.style.opacity = _opacity;

		if (_left >= 80 && _opacity <= 0) {
			clearInterval(id);
			callback();
		}
	}
	if (_left <= 80) {
		id = setInterval(moveLoaderForExit, 13);
	} else {
		callback();
	}
}
async function animateResopnseEntry(callback) {
	let id = null;
	let _translate = -100;
	let _opacity = 0;

	// animation
	clearInterval(id);
	function animateEntry() {
		if (_translate < -50) _translate += 5;
		if (_opacity < 1) _opacity += 0.1;

		responseContainerElement.style.transform = `translateX(${_translate}%)`;
		responseContainerElement.style.opacity = _opacity;

		if (_translate >= -50 && _opacity >= 1) {
			clearInterval(id);
			callback();
		}
	}
	id = setInterval(animateEntry, 25);
}
async function animateResponseExit(callback) {
	let id = null;
	let _translate = -50;
	let _opacity = 1;

	// animation
	clearInterval(id);
	function animateExit() {
		if (_translate < 0) _translate += 5;
		if (_opacity > 0) _opacity -= 0.1;

		responseContainerElement.style.transform = `translateX(${_translate}%)`;
		responseContainerElement.style.opacity = _opacity;

		if (_translate >= 0 && _opacity <= 0) {
			clearInterval(id);
			callback();
		}
	}
	if (responseContainerElement) {
		id = setInterval(animateExit, 25);
	} else {
		callback();
	}
}

// ---> promises
function animateSearchSectionPromise() {
	return new Promise((resolve, reject) => {
		function onAnimationDone() {
			resolve();
		}
		animateSearchSection(onAnimationDone);
	});
}
function animateLoaderEntryPromise() {
	return new Promise((resolve, reject) => {
		function onAnimationDone() {
			resolve();
		}
		createLoader(); // create element
		animateLoaderEntry(onAnimationDone); // entry animation
	});
}
function animateLoaderExitPromise() {
	return new Promise((resolve, reject) => {
		function onAnimationDone() {
			document.getElementById("loader-container").remove(); // remove element
			resolve();
		}
		animateLoaderExit(onAnimationDone); // exit animation
	});
}
function animateResponseEntryPromise() {
	return new Promise((resolve, reject) => {
		function onAnimationDone() {
			resolve();
		}
		createResponseContainer(); // create response section
		animateResopnseEntry(onAnimationDone); // entry animation
	});
}
function animateResponseExitPromise() {
	return new Promise((resolve, reject) => {
		function onAnimationDone() {
			if (responseContainerElement) {
				clearResponseData(); // clear all old data
				responseContainerElement.remove(); // remove element
				responseContainerElement = null;
			}
			resolve();
		}
		animateResponseExit(onAnimationDone); // exit animation
	});
}
function addPredictionSection() {
	return new Promise((resolve, reject) => {
		function onDone() {
			resolve();
		}
		displayPredictions(onDone);
	});
}
function addDataSection() {
	return new Promise((resolve, reject) => {
		function onDone() {
			resolve();
		}
		displayCurrentData(onDone);
	});
}
function addHourlyForecastSection() {
	return new Promise((resolve, reject) => {
		function onDone() {
			resolve();
		}
		displayHourlyForecastData(onDone);
	});
}

// ---> render response
async function renderForecastOrErrorPromise() {
	console.log(
		"response ==========> ",
		errorMessage ? errorMessage : wetherData
	);

	// wait to visible loader
	animateLoaderExitPromise()
		.then(() => {
			return animateResponseEntryPromise();
		})
		.then(() => {
			return addPredictionSection();
		})
		.then(() => {
			return addDataSection();
		})
		.then(() => {
			return addHourlyForecastSection();
		})
		.then(() => {});
}
