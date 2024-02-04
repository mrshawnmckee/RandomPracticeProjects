const displayArea = document.querySelector("#locationDisplay");
document.querySelector("#getLocation").addEventListener("click", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
    }
});

const displayGeoData = (position) => {
    const {latitude, longitude} = position.coords; 
    displayArea.textContent = `Latitiude: ${latitude}, Longitude: ${longitude}`;
}

const displayError = (err) => {
    displayArea.textContent = err.message; 
};
