// function isJavaScriptFile(filename){
//     if(filename.endsWith(".js")){
//         return true
//     }else{
//         return false
//     }
// }

// let result =isJavaScriptFile("index.html")
// console.log(result)

// solve-2
function isJavaScriptFile(filename){
    return filename.endsWith(".js");
}

let result =isJavaScriptFile("index.js")
console.log(result)