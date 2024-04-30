// Function 
// In typescript a function is a block of code that performs a specific task.
// It can accept parameters, execute statements and optionally return a value of a specified type.
// Example 1
// function displayMessage(){
//     console.log("Hello World")
// }
// // Calling function
// displayMessage()
// Example 2
// function displayMessage(name:string){
//     console.log(`Hello ${name} , Welcome to the TypeScript class at Governor House.`)
// }
// // Calling function
// displayMessage("Saba Zain")
// Example 3
// ? this question mark means its optional
// function displayMessage(name:string , age?:number){
//     console.log(`Her name is ${name} and she is ${age} years old.`)
// }
// // Calling function
// displayMessage("Sana", 30)
// Example 4
// In typescript "rest" refers to the rest parameter syntax, which allows a function to accept an indefinite number of arguements.
// This is denoted by "..." three dots.
// function displayMessage(name:string , ...rest:any){
//     console.log(`Hello ${name},Welcome to the Typescript class ${rest}.`)
// }
// // Calling function
// displayMessage("Saba Zain", 1 ,"Thursday 9:00 am - 12:00 pm")
// Example 5
// Default parameters in typescript allow to set a default value for a function parameter
// function displayMessage(name:string = "Sana" , age:number = 30){
//     console.log(`${name},${age} years old.`)
// }
// Calling function
// displayMessage()
// displayMessage("Ali",28)
// displayMessage("Maria",29)
// displayMessage()
// Arrow function - An arrow function is a concise way to write a function. It provides a more compact syntax "=>".
// Arrow functions are often used for their simplicity and readability.
// Example
// const calculateSquare = (num:number) => num * num;
// const number = 6
// const square = calculateSquare(number);
// console.log(square);
// Function that performs through return
// Example
// function square(number:number):number{
//     return number*number
// }
// const num:number = 5
// const result:number = square(num)
// console.log(`The square of ${num} is ${result}`)
// Objects in Typescript
// In typescript an object is a data structure that represents a collection of key value pairs.
// where each key is a string or a number and each value can be of any data type,including other objects,arrays,functions etc.
// Example
let employee = {
    name: "Muzammil",
    dateOfBirth: "10th January 1987",
    education: "Software Engineering",
    nationality: "Pakistani",
    gender: "Male",
    contactNumber: 92 - 3344876582,
    designation: "Software Engineer",
    emailAddress: "Muzammil.546@yahoo.com"
};
//console.log(employee.name  +" "+  employee.gender  +" "+ "date of birth:", employee.dateOfBirth );
//console.log(`${employee.education},${employee.designation}`);
//console.log(`${employee.contactNumber},${employee.emailAddress}`);
console.log(`${employee.name},${employee.designation},${employee.emailAddress}`);
export {};
