"use strict"
function Flights() {
   function calculateNumberOfFlights(numberofpassengers, flightcapacity){
    try{
        if ((numberofpassengers.value> 0) && (numberofpassengers .value .isInteger(numberofpassengers)))
        throw new error("The number of passengers must be a positive integer value");
        if ((flightcapacity.value > 0)&& (flightcapacity.value .isInteger(flightcapacity)))
        throw new error("The capacity of the flight must be a positive integer value");
        console.log(numberofpassengers, flightcapacity);
    }
    catch(error){
        console/log(error);
    }
}
let g = dislim;
let y = disarr;
let tot = y.map(x => y+x);
function checkAircraftRevision(g,y){
 try{
    if (tot<=(g/2)){
    return ("The revision needs to be done within the next 3 months")
 }
 else if(tot<=(3*g)){
    return ("The revision needs to be done within the next 2 months")
 }
 else if(tot>(3*g) && (tot<=g)){
    return ("The revision needs to be done within the next month")
 }
 else (tot>g){
    throw new error (error)
 };
}
catch(error){
    console/log(error);
}
}
}
return {calculateNumberOfFlights, checkAircraftRevision};

let a = flightcapacity;
let b = arrayofpassengers;
let c = b.map(j => c+j);
function Passengers(){
    function checkFlightCapacity(a,b){
        try{
            if (c<a){
                return(c);}
                if (c>a){
                    throw(error);}
        }
        catch(error){
            console.log(error);
        }
    } 

  function  distributeAllSeatsToAllPassengers(numberofVIPpassengers, numberofregularpassengers, numberofflights, numberofbusinessseats, numberofeconomyseats){
    let VIPpassengerswithbusinessseats = 0;
    let VIPpassengerswitheconomyseats = 0;
    let regularpassengerswithbusinessseats = 0;
    let regularpassengerswitheconomyseats = 0;
  if (businessseat>0){
    businessseat--;
    VIPpassengerswithbusinessseats++;
  }
  if (economyseat>0){
    economyseat--;
    VIPpassengerswitheconomyseats++;
  }
  if (businessseat>0){
    businessseat--;
    regularpassengerswithbusinessseats++;
  }
  if (economyseat>0){
    economyseat--;
    regularpassengerswitheconomyseats++;
  }
return{
    VIPpassengerswithbusinessseats, VIPpassengerswitheconomyseats, regularpassengerswithbusinessseats, regularpassengerswitheconomyseats
}
  }
return{distributeAllSeatsToAllPassengers}
}
module.exports = Flights();
module.exports = Passengers();