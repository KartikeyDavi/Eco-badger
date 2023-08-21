const car = document.querySelector("#car").value
const public = document.querySelector("#public").value
const energy = document.querySelector("#energy").value

// Function to calculate carbon footprint
function calculateCarbonFootprint(kilometersDriven, energyConsumed) {
    // Constants for emissions factors (in kg CO2 per unit)
    const EMISSIONS_PER_KM = 0.257;  // Average car emissions (converted from miles to km)
    const EMISSIONS_PER_KWH = 0.527; // Average electricity emissions

    // Calculate emissions from transportation and energy consumption
    const transportationEmissions = kilometersDriven * EMISSIONS_PER_KM;
    const energyEmissions = energyConsumed * EMISSIONS_PER_KWH;

    // Total carbon footprint
    const totalCarbonFootprint = transportationEmissions + energyEmissions;

    return totalCarbonFootprint;
}


const calculate = () => {
    const car = Number(document.querySelector("#car").value)
    const public = Number(document.querySelector("#public").value)
    const energy = Number(document.querySelector("#energy").value)
    const carbonFootprint = calculateCarbonFootprint(car + public, energy);
    console.log(`Your carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2.`);
   document.querySelector("#result").innerText = carbonFootprint.toFixed(2);
}

document.querySelector("#submit").addEventListener("click", () => {
    calculate()
})

