// Write your helper functions here!
require('isomorphic-fetch');

//Destination format
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
function formSubmission(doc, list, pilot, copilot, fuelLevel, cargoMass) {

   let pilotInput = validateInput(pilot) 
    if (pilotInput === "Empty") {
        alert("All fields are required!");
        } else if  (pilotInput === "Is a Number") {
            alert("Please enter a valid pilot name");
        } else {    
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        };


   let copilotInput = validateInput(copilot) 
    if (copilotInput === "Empty") {
            alert("All fields are required!");
        } else if  (copilotInput === "Is a Number") {
            alert("Please enter a valid copilot name");
        } else {    
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
    };

    let fuelLevelInput = validateInput(fuelLevel) 
    if (copilotInput === "Empty") {
            alert("All fields are required!");
        } else if (fuelLevelInput === "Not a Number") {
        alert("Please enter a number");
    };
    
    if (parseInt(fuelLevel) < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
    }
}




//Fetch Planets
function myFetch() {
    let planetsReturned;
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(planetsReturned) {
            console.log(planetsReturned);
        });
    });
}


//Choose destination
function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
