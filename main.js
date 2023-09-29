// //პირველი დავალება

// function myFunction(a,b){
//     if(a===b){
//         return "ტოლია"
//     }else{
//         return "არ არის ტოლი"
//     }
// }
// let result = myFunction("2",2)
// console.log(result)






// //მეორე დავალება

// function converter(fahrenheit){
//     if(typeof(fahrenheit) == Number){
//         let celsius = (fahrenheit - 32) * 5/9;
//         return celsius
//     }else{
//         return false
//     }
// }

// let convert = converter(40)
// console.log(convert)






//მესამე დავალება
function calculate(a,b,operation){
    if(isNaN(a) || isNaN(b)){
        return false
    }
    
    


    if(operation === "+"){
        return a+b
    }else if(operation === "-"){
        return a-b
    }else if (operation === "*"){
        return a*b
    }else if (operation === "/"){
        return a-b
    }else{
        return false
    }
}
const result = calculate(500, 5, '+');
console.log(result)