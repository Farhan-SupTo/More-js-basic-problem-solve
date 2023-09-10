// let nameOne = "Farhan";
// let nameTwo = "Samiulpunno";

// let friendOneLength = nameOne.length;
// let friendTwoLength = nameTwo.length;
// if(friendOneLength > friendTwoLength){
//     console.log(nameOne.split().reverse().join())
// }else{
//     console.log(nameTwo.split("").reverse().join(""))
// }

// 2-using function

function ReverseName(nameOne,nameTwo){
// let nameOne = "Farhan";
// let nameTwo = "Samiulpunno";

let friendOneLength = nameOne.length;
let friendTwoLength = nameTwo.length;
if(friendOneLength > friendTwoLength){
    return(nameOne.split().reverse().join())
}else{
    return(nameTwo.split("").reverse().join(""))
}
}

let LargestReverseName = ReverseName("Farhan", "Samiulpunno");
console.log("Largest friend Name is in reverse way = " +LargestReverseName)
