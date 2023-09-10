// let numbers=[-1,2,-3,4,5,6,-7,8,-9,10]
// let count =0;

// for(i=0; i<numbers.length; i++){
//     const element =numbers [i];
//     if(element > 5){
        
//         console.log(element)
//         count =count + 1
//     }
// }
// console.log("total number of greater than 5 is =" +count)

// 2-using function


function greaterThanFive(numbers){
    let count =0;
    
    for(let i=0; i<numbers.length; i++){
        const element =numbers [i];
        if(element > 5){
            
             console.log(element)
            count =count + 1
        }
    }
    return count;
}

let result = greaterThanFive([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log("the total number that are greater than 5 in the list is ="+result)