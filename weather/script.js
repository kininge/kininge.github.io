/** @format */

const GEO_API_KEY = "9459ad5ca5msh22a23187c01885ap1f5790jsn6938d856a490";
const BASE_GEO_API = "https://google-maps-geocoding.p.rapidapi.com";
const WEATHER_API_KEY = "d714e54d22d84ecc8c121001241009";
const BASE_WEATHER_API = "https://api.weatherapi.com";
const BASE_IP_API = "https://api.ipify.org?format=json";

// dispaly data variables
var searchedPlace = null;
var latitudeLongitudeOrIP = null;
var errorMessage = null;
const weather = {
	place: null,
	weather: null,
	weatherImage: null,
	hourly: [],
	forcast: [],
};

const API_VERSION = {
	V1: "/v1",
};

const APIS = {
	geoCode: (address) => `/geocode/json?address=${address}`,
	currentWeather: (laditudeLogngitude, key) =>
		`/current.json?q=${laditudeLogngitude}&key=${key}`,
	forcast: (laditudeLogngitude, day = 1, key) =>
		`/forecast.json?q=${laditudeLogngitude}&days=${day}&key=${key}`,
};

async function networkCall(url = "", method = "GET", header = {}, body = {}) {
	if (url === "") {
		return { status: "error", message: "URL can't be empty" };
	} else {
		try {
			let response;

			switch (method) {
				case "POST": {
					response = await fetch(url, {
						method: "POST",
						headers: header,
						body: JSON.stringify(body),
					});
					break;
				}
				case "PUT": {
					response = await fetch(url, {
						method: "PUT",
						headers: header,
						body: JSON.stringify(body),
					});
					break;
				}
				case "DELETE": {
					response = await fetch(url, {
						method: "DELETE",
						headers: header,
						body: JSON.stringify(body),
					});
					break;
				}
				default: {
					response = await fetch(url, {
						method: "GET",
						headers: header,
					});
				}
			}

			if (response.ok) {
				response = await response.text();
				return {
					status: "success",
					body:
						typeof response === "string"
							? JSON.parse(response)
							: response,
				};
			} else {
				return { status: "error", message: JSON.stringify(response) };
			}
		} catch (e) {
			return { status: "error", message: e.message };
		}
	}
}

// on page load
window.addEventListener("load", (event) => {
	getCurrentPlaceWeatherReport();

	const searchInputBox = document.getElementById("place-search");
	searchInputBox.addEventListener("keydown", resetSearchResult);
	searchInputBox.addEventListener("change", (event) =>
		handleSeach(event, event.target.value)
	);
});

// resetb response
function resetSearchResult(event) {
	if (errorMessage !== null || weather.place !== null) {
		searchedPlace = null;
		latitudeLongitudeOrIP = null;
		errorMessage = null;
		weather.place = null;
		weather.weather = null;
		weather.weatherImage = null;
		weather.forcast = [];
		weather.hourly = [];

		// remove response
		const responseBoxElement = document.querySelector(".response-box");
		if (responseBoxElement) {
			responseBoxElement.remove();
		}

		// remove all forcast
		const weatherForecastBoxElement = document.querySelector(
			"weather-forecast-box"
		);
		if (weatherForecastBoxElement) {
			weatherForecastBoxElement.remove();
		}
	}
}

// search current user's IP address
function getIPAddress() {
	return new Promise(async (resolve, reject) => {
		const ipAPIresponse = await networkCall(BASE_IP_API, "GET", {}, {});

		if (ipAPIresponse.status === "success") {
			resolve(ipAPIresponse.body);
		} else {
			reject(ipAPIresponse.message);
		}
	});
}

// search place
function searchPlace(searchParameter) {
	return new Promise(async (resolve, reject) => {
		const url = BASE_GEO_API + APIS.geoCode(searchParameter);
		const header = { "X-RapidAPI-Key": GEO_API_KEY };
		const placeResponse = await networkCall(url, "GET", header, {});

		if (placeResponse.status === "success") {
			resolve(placeResponse.body);
		} else {
			reject(placeResponse.message);
		}
	});
}

// get current weather from latitue and longitude or IP address
function getCurrentWeather(latitudeAndLongitude) {
	return new Promise(async (resolve, reject) => {
		const url =
			BASE_WEATHER_API +
			API_VERSION.V1 +
			APIS.currentWeather(latitudeAndLongitude, WEATHER_API_KEY);

		const weatherResponse = await networkCall(url, "GET", {}, {});

		if (weatherResponse.status === "success") {
			resolve(weatherResponse.body);
		} else {
			reject(weatherResponse.message);
		}
	});
}

// get weather forcast for coming days
function getComingDaysWeather(latitudeAndLongitude, days = 1) {
	return new Promise(async (resolve, reject) => {
		const url =
			BASE_WEATHER_API +
			API_VERSION.V1 +
			APIS.forcast(latitudeAndLongitude, days, WEATHER_API_KEY);
		const weatherForcastResponse = await networkCall(url, "GET", {}, {});

		if (weatherForcastResponse.status === "success") {
			resolve(weatherForcastResponse.body);
		} else {
			reject(weatherForcastResponse.message);
		}
	});
}

// render searched results
function renderSearchedResult() {
	// console.log("Place", weather.place);
	// console.log("Weather", weather.weather);
	// console.log("Weather Image", weather.weatherImage);
	// console.log("Error Message", errorMessage);

	const responseContainerElement =
		document.getElementById("response-container");

	const responseBoxElement = document.createElement("div");
	responseBoxElement.classList.add("response-box");

	if (errorMessage) {
		responseBoxElement.style.display = "flex";
		responseBoxElement.style.alignItems = "center";
		responseBoxElement.style.justifyContent = "center";

		// error message element
		const errorMesageElement = document.createElement("small");
		errorMesageElement.classList.add("error-message");
		errorMesageElement.innerHTML = errorMessage;
		responseBoxElement.appendChild(errorMesageElement);
	} else {
		// weather image element
		const weatherImageElement = document.createElement("img");
		weatherImageElement.classList.add("weather-image");
		weatherImageElement.src = weather.weatherImage;
		responseBoxElement.appendChild(weatherImageElement);

		// weather element
		const weatherMessageElement = document.createElement("h3");
		weatherMessageElement.classList.add("weather-message");
		weatherMessageElement.innerHTML = weather.weather;
		responseBoxElement.appendChild(weatherMessageElement);

		// place element
		const placeElement = document.createElement("h2");
		placeElement.classList.add("place-message");
		placeElement.innerHTML = weather.place;
		responseBoxElement.appendChild(placeElement);
	}

	// add to DOM
	responseContainerElement.appendChild(responseBoxElement);
}

function formatDate(_date) {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return _date instanceof Date
		? `${days[_date.getDay()]}, ${_date.getDate()} ${months[
				_date.getMonth()
		  ].substring(0, 3)} ${_date.getFullYear()}`
		: "";
}

// render weather forcast
function renderWeatherForcast(forecast) {
	// forcast container
	const weatherForecastContaienrElement = document.getElementById(
		"weather-forecast-container"
	);

	// forcast card
	let weatherForecastBoxElement = document.querySelector(
		".weather-forecast-box"
	);
	if (weatherForecastBoxElement === null) {
		weatherForecastBoxElement = document.createElement("div");
		weatherForecastBoxElement.classList.add("weather-forecast-box");
	}

	// forcast box
	const weatherForecastCardElement = document.createElement("div");
	weatherForecastCardElement.classList.add("weather-forecast-card");

	// weather image element
	const weatherImageElement = document.createElement("img");
	weatherImageElement.classList.add("weather-forecast-image");
	weatherImageElement.src = forecast.weatherImage;
	weatherForecastCardElement.appendChild(weatherImageElement);

	// weather element
	const weatherMessageElement = document.createElement("h4");
	weatherMessageElement.classList.add("weather-forecast");
	weatherMessageElement.innerHTML = forecast.weather;
	weatherForecastCardElement.appendChild(weatherMessageElement);

	// place element
	const weatherDateElement = document.createElement("h3");
	weatherDateElement.classList.add("weather-forecast-date");
	weatherDateElement.innerHTML = formatDate(forecast.date);
	weatherForecastCardElement.appendChild(weatherDateElement);

	if (weatherForecastContaienrElement.lastChild) {
		// add space
		weatherForecastCardElement.classList.add("weather-forecast-card-gap");
	}

	weatherForecastBoxElement.appendChild(weatherForecastCardElement);
	weatherForecastContaienrElement.appendChild(weatherForecastBoxElement);
}

// handle forcast data
function parseForcastData(forcastData) {
	if (weather.place === null) {
		weather.place = `${forcastData.location.name} ${forcastData.location.region}, ${forcastData.location.country}`;
	}
	weather.weather = forcastData.current.condition.text;
	weather.weatherImage = "https:" + forcastData.current.condition.icon;
	renderSearchedResult();

	const forecasts = forcastData.forecast.forecastday;
	// curreny day forcast : TODO

	// future forcast
	for (let i = 1; i < forecasts.length; i++) {
		const forecast = forecasts[i];
		const _forecast = {
			date: new Date(forecast?.date),
			weather: forecast?.day?.condition?.text,
			weatherImage: "https:" + forecast?.day?.condition?.icon,
			hourly: [],
		};

		renderWeatherForcast(_forecast);
		weather.forcast.push(_forecast);
	}
}

function handleSeach(event, value) {
	event.preventDefault();

	const _searchedPlace = value
		? value
		: event?.target?.children[0]?.children[0]?.value || "";

	if (
		_searchedPlace &&
		_searchedPlace !== "" &&
		searchedPlace !== _searchedPlace
	) {
		searchedPlace = _searchedPlace;
		searchPlace(searchedPlace)
			.then((result) => {
				if (result.status === "ZERO_RESULTS") {
					errorMessage = `Oops, We don't find '${searchedPlace}'!`;
					renderSearchedResult();
				} else {
					place = result.results[0].formatted_address;
					const latitude = result.results[0].geometry.location.lat;
					const longitude = result.results[0].geometry.location.lng;
					latitudeLongitudeOrIP = `${latitude},${longitude}`;

					return getComingDaysWeather(latitudeLongitudeOrIP, 8);
				}
			})
			.catch((error) => {
				if (errorMessage === null) {
					errorMessage = error.message;
					renderSearchedResult();
					return error;
				}
			})
			.then((result) => {
				if (result) {
					parseForcastData(result);
					return result;
				}
			})
			.catch((error) => {
				if (errorMessage === null) {
					errorMessage = error.message;
					renderSearchedResult();
					return error;
				}
			})
			.finally(() => {});
	}
}

async function getCurrentPlaceWeatherReport() {
	getIPAddress()
		.then((result) => {
			if (result) {
				latitudeLongitudeOrIP = result.ip;

				return getComingDaysWeather(latitudeLongitudeOrIP, 8);
			}
		})
		.catch((error) => {
			errorMessage = error.message;
			renderSearchedResult();
			return error;
		})
		.then((result) => {
			if (result) {
				parseForcastData(result);
				return result;
			}
		})
		.catch((error) => {
			if (error && errorMessage === null) {
				errorMessage = error.message;
				renderSearchedResult();
				return error;
			}
		})
		.finally(() => {});
}
