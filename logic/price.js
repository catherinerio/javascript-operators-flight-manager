"use strict"
function Prices() {
function calculateFinalPrice(basePrice, variationpass, variationFlight){
let redfinal = (basePrice - variationpass% * basePrice - variationFlight * (basePrice - variationpass% * basePrice)) .toFixed(2);
let incfinal = (basePrice + variationpass% * basePrice - variationFlight * (basePrice + variationpass% * basePrice)) .toFixed(2);

}
return {calculateFinalPrice};
calculateDefaultFinalPrice(bp, pt, ft){
let defp1= (bp - 
};
return {calculateDefaultFinalPrice};
calculateTotalFinalPrice(noofseats, passtype, flighttype, basprice){
 let appo = (noofseats * calculateDefaultFinalPrice(bp, pt, ft))
};
return {calculateTotalFinalPrice};


}

module.exports = Prices();
