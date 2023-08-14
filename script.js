// Write your JavaScript code here!

window.addEventListener("load", function() {
  //form inputs
  let form = document.querySelector("form");
    //updating items      
    const list = document.getElementById("faultyItems");
    list.style.visibility = 'hidden';
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const missionTarget = document.getElementById("missionTarget"); 
//Submit button listener    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const pilot = document.querySelector("input[name=pilotName]").value;
        const copilot = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoMass = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);  
    });
 //destination data   
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function(result) {
  listedPlanets = result;
  console.log(listedPlanets);
  
  const destPlanet = pickPlanet(listedPlanets);
  console.log(destPlanet);
  addDestinationInfo(
    document,
    destPlanet.name,
    destPlanet.diameter,
    destPlanet.star,
    destPlanet.distance,
    destPlanet.moons,
    destPlanet.image
  );
  });
});
