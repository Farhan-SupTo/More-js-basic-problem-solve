function publicBusFare(participants){
    if(typeof participants !== "number" || participants < 50){
        return "please provide a valid input"
    }
     let capacityOfBus = 50;
     let capacityOfMicrobus = 11;

     let remaining = 0;
     remaining = participants % capacityOfBus;
     console.log(remaining);

     if(remaining > 11){

        remaining =remaining % capacityOfMicrobus
        console.log(remaining)

     }
    let rateOfBusfare = remaining * 250;
    return rateOfBusfare;


}

let result =publicBusFare(365);
console.log("Cost of public bus is = "+result)