// Write your helper functions here!
require('isomorphic-fetch');

//Destination format
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `;
}
//validation function
function validateInput(testInput) {
    if (testInput.trim() === "") {
            return "Empty";
        } else {
        testInput = parseInt(testInput);
            if (isNaN(testInput)) {
                return "Not a Number";
                } else if (typeof (testInput) === 'number') {
                return "Is a Number";
                };
            }    
}

//form submission function
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
    } else if  (validateInput(pilot) === "Is a Number" ) {
            alert("Please enter a valid pilot name.");       
    } else if  (validateInput(copilot)  === "Is a Number") {
            alert("Please enter a valid copilot name.") 
    } else if (validateInput(fuelLevel)  === "Not a Number") {
            alert("Please enter a numeric value for fuel level.");
    } else if (validateInput(cargoMass) === "Not a Number") {
           alert("Please enter a numeric value for cargo mass.");
    } else {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
    
        if (parseInt(fuelLevel) < 10000 && parseInt(cargoMass) < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass ready for launch";
            } else if (parseInt(cargoMass) > 10000 && parseInt(fuelLevel) > 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level ready for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            } else if (parseInt(fuelLevel) < 10000 && parseInt(cargoMass) > 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
            } else {
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                document.getElementById("fuelStatus").innerHTML = "Fuel level ready for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass ready for launch";
                document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        };                
    };
};

//Fetch Planets
function myFetch() {
    return fetch("https://handlers.education.launchcode.org/static/planets.json").then(async function(response) {
      return await response.json();
    });
  }

//Choose destination
function pickPlanet(planets) {
    const randomNum = Math.floor(Math.random() * planets.length);
    return planets[randomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
