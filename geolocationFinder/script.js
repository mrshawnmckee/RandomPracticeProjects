const displayArea = document.querySelector("#locationDisplay");
document.querySelector("#getLocation").addEventListener("click", () => {
    if(navigator.geolocation) {
        //watchCurrentPosition would change as the user's position changes
        navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
    }
});

const displayGeoData = (position) => {
    // Destructuring Latitude and longitude from position.coords
    const {latitude, longitude} = position.coords; 
    displayArea.textContent = `Latitiude: ${latitude}, Longitude: ${longitude}`;
}

const displayError = (err) => {
    displayArea.textContent = err.message; 
};
