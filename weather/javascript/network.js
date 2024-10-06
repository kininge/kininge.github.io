/** @format */

const GEO_API_KEY = "9459ad5ca5msh22a23187c01885ap1f5790jsn6938d856a490";
const BASE_GEO_API = "https://google-maps-geocoding.p.rapidapi.com";
const WEATHER_API_KEY = "d714e54d22d84ecc8c121001241009";
const BASE_WEATHER_API = "https://api.weatherapi.com";
const BASE_IP_API = "https://api.ipify.org?format=json";

const API_VERSION = {
	V1: "/v1",
};

const APIS = {
	geoCode: (address) => `/geocode/json?address=${address}`,
	currentWeather: (laditudeLogngitude, key) =>
		`/current.json?q=${laditudeLogngitude}&key=${key}`,
	forecast: (laditudeLogngitude, day = 1, key) =>
		`/forecast.json?q=${laditudeLogngitude}&days=${day}&key=${key}`,
};

// response
var searchedParamerter = {
	place: null,
	latitude: null,
	longitude: null,
	time: null,
};
var loading = false;
var activeWeatherIndex = 0;
var activeHourIndex = 0;
var hourlyForecast = [];
var wetherData = [];
var errorMessage = null;

// ---> helper function
// update search parameter
function updateSearchParameter(place) {
	searchedParamerter = {
		place: place.place,
		latitude: place.latitude,
		longitude: place.longitude,
		time: new Date().getTime(),
	};
}
// clear response data
function clearResponseData() {
	loading = false;
	activeWeatherIndex = 0;
	activeHourIndex = 0;
	wetherData = [];
	hourlyForecast = [];
	errorMessage = null;
}
// clear search and response data
function clearSearchAndResponseData() {
	searchedParamerter = {
		place: null,
		latitude: null,
		longitude: null,
		time: null,
	};
	clearResponseData();
}
// get latitude and longitude
function getLatitudeAndLongitude() {
	return searchedParamerter?.latitude === null
		? ""
		: `${searchedParamerter?.latitude},${searchedParamerter?.longitude}`;
}
// parse data and make response ready
function parseAndMakeResponseReady(data) {
	const _timezome = data?.location?.tz_id ?? "";
	const timeZoneConvertedDateString = new Date().toLocaleString("en-US", {
		timeZone: _timezome,
	});
	const now = new Date(timeZoneConvertedDateString);
	wetherData = data?.forecast?.forecastday;

	for (let index = 0; index < wetherData.length; index++) {
		const weather = wetherData[index];
		weather.current_date = now;

		// image update for each hour
		for (let _index = 0; _index < weather.hour.length; _index++) {
			weather.hour[_index].time = new Date(weather?.hour[_index]?.time);
			weather.hour[_index].day_index = diffrenceInDays(
				weather.hour[_index].time,
				weather.current_date
			);
			const sameHour =
				weather.hour[_index].time.getHours() ===
				weather.current_date.getHours();
			const lessThanCurrentHour =
				weather.hour[_index].time.getHours() <
				weather.current_date.getHours();

			weather.hour[_index].condition.icon = getImage(
				weather?.hour[_index]?.is_day === 0, // is Night
				weather?.hour[_index]?.condition
			);

			weather.hour[_index].condition.sky = getSky(
				weather?.hour[_index]?.is_day === 0, // is Night
				weather?.hour[_index]?.condition
			);

			// same day greater or equal to current hour
			const condition1 =
				weather.hour[_index].day_index === 0 &&
				(sameHour === true || lessThanCurrentHour === false);
			// next day less than current hour
			const condition2 =
				weather.hour[_index].day_index === 1 &&
				lessThanCurrentHour === true;

			if (condition1 || condition2) {
				hourlyForecast.push(weather.hour[_index]);
			}
		}
	}
}

// ---> promises
// search current user's IP address
function getIPAddress() {
	return new Promise(async (resolve, reject) => {
		// const ipAPIresponse = await networkCall(BASE_IP_API, "GET", {}, {});

		// if (ipAPIresponse.status === "success") {
		// 	resolve(ipAPIresponse.body);
		// } else {
		// 	reject(ipAPIresponse.message);
		// }
		setTimeout(() => {
			resolve(IP_ADDRESS);
		}, 300);
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
function getWeatherForecast(latitudeAndLongitude, days = 1) {
	return new Promise(async (resolve, reject) => {
		const url =
			BASE_WEATHER_API +
			API_VERSION.V1 +
			APIS.forecast(latitudeAndLongitude, days, WEATHER_API_KEY);
		const weatherForcastResponse = await networkCall(url, "GET", {}, {});

		if (weatherForcastResponse.status === "success") {
			resolve(weatherForcastResponse.body);
		} else {
			reject(TEXT.FORECAST_ERROR(searchedParamerter?.place));
		}
	});
}

// ---> network call handler
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
				response = await response.text();
				response = JSON.parse(response);

				let errorMessage = JSON.stringify(response);
				if (response.error) {
					response = response.error;
				}
				if (response.hasOwnProperty("message")) {
					errorMessage = response.message;
				}

				return { status: "error", message: errorMessage };
			}
		} catch (e) {
			return { status: "error", message: e.message };
		}
	}
}

// ---> network calls
async function searchWeatherForecastPromise() {
	onSearchedTextChange(); // add clear text button
	removeSuggestions(); // remove suggestions

	animateSearchSectionPromise() // search section animation
		.then(() => {
			return animateResponseExitPromise(); // remove existing response
		})
		.then(() => {
			return animateLoaderEntryPromise(); // animated entry of loader
		})
		.then(() => {
			return searchedParamerter.latitude
				? getForecastDataPromise() // first search place then check forecast
				: getForecastDataByPlacePromise(); // we already know place from suggestion check forecast
		});
}
async function getForecastDataPromise() {
	updateRecentSearch(searchedParamerter);
	getWeatherForecast(getLatitudeAndLongitude(), 8)
		.then((result) => {
			if (result) {
				parseAndMakeResponseReady(result);
				return result;
			}
		})
		.catch((error) => {
			if (error && errorMessage === null) {
				errorMessage = error.message;
				return error;
			}
		})
		.finally(() => {
			renderForecastOrErrorPromise();
		});
}
async function getForecastDataByPlacePromise() {
	searchPlace(searchedParamerter.place)
		.then((result) => {
			if (result.status === TEXT.ADDRESS_NOT_FOUND_STATUS) {
				errorMessage = TEXT.ADDRESS_ERROR(searchedParamerter?.place);
			} else {
				searchedParamerter.latitude =
					result.results[0].geometry.location.lat;
				searchedParamerter.longitude =
					result.results[0].geometry.location.lng;
				searchedParamerter.time = new Date().getTime();

				updateTries(searchedParamerter);
				return getForecastDataPromise();
			}
		})
		.catch((error) => {
			if (errorMessage === null) {
				errorMessage = error;
				renderForecastOrErrorPromise();
			}
		});
}
