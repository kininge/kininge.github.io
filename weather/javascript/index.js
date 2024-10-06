/** @format */

window.addEventListener("load", (event) => {
	// add predefined 'recent search' data to localStrorage
	if (getRecentSearch() === null) {
		setRecentSearch(PLACES);
	}
	// add predefined "seearch auto complete" data to localStrorage
	if (getTries() === null) {
		setTries(createNode());
		PLACES.forEach((place) => updateTries(place));
	}
});
