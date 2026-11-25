if(localStorage.getItem("roverLocation")==null)
{
    const locations = 
    [
        "FED Block",
        "L Block", 
        "C Block", 
        "R Block", 
        "EEE Block", 
        "S Block", 
        "SK Block"
    ];
    localStorage.setItem("roverLocation", JSON.stringify(locations));
}
function scanCampus() {
    // Get the locations from localStorage every time the button is clicked.
    const locations = JSON.parse(localStorage.getItem("roverLocation")) || [];

    if (locations.length === 0) {
        document.getElementById("scanStatus").textContent = "No locations saved";
        return;
    }

    let index = Number(localStorage.getItem("netraScanIndex") || 0);
    if (!Number.isInteger(index) || index < 0 || index >= locations.length) {
        index = 0;
    }

    document.getElementById("scanStatus").textContent = "Scanning: " + locations[index];
    localStorage.setItem("netraScanIndex", (index + 1) % locations.length);
}