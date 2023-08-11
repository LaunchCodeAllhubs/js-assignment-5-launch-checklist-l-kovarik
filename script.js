// Write your JavaScript code here!

window.addEventListener("load", function() {
    //updating items      
    const doc = document.getElementById(this.document);  
    const list = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    

    let form = document.querySelector("form");
//Submit button listener    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        //form inputs        
    const pilot = document.querySelector("input[name=pilotName]").value;
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoMass = document.querySelector("input[name=cargoMass]").value;
        
    formSubmission(doc, list, pilot, copilot, fuelLevel, cargoMass);
      
    });
     

 //destination data   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});