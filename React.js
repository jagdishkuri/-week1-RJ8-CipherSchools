// console.log("Hello World");
// // types of Variables in Java
// const firstName = "Jagdish Kuri";
// console.log(firstName);
// let LastNmae = "Kumar";
// console.log(LastNmae);
// var age = 23;
// console.log(age);

// // string interpolation
// const Name = "Jhon";
// const Last = "jhonyy";
// const Final = `${Name} ${Last}`;
// console.log(Final);
// // spread operator
// const arr1 = [1,2,3,4,5,6,4,5,7,8,8,98];
// console.log(arr1);
// const arr2 = [1,1,1, ...arr1];
// console.log(arr2);
// console.log(arr1);
// function addTowNumber(num1, num2=56){
//    return num1+num2;
// }
// // console.log(addTowNumber(34));

// const myFunction = (num1,num2)=> num1+num2;
// console.log(myFunction(34,67));
//  let maxOfTwoNumber = (num1,num2)=>Math.max(num1,num2);
//  console.log(maxOfTwoNumber(67,89));
// let maxOFTwonumbers = (...numbers)=>{
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers){
//         maximum = Math.max(maximum, number)
//     }
//     return maximum;
// };
// console.log( maxOFTwonumbers(1,2,3,4,5,6,7));
//for objects
// const obje = {
//     name: "jagdish",
//     last: "kuri",
//     age: 24,
//     address:{
//     city: "jaipur",
//     },
// };
// // // console.log(obje);
// // const obje2 = {...obje};
// const obje2 = JSON.parse(JSON.stringify(obje));
//  obje2.address.city = "sikar";
//  console.log(obje);
//  console.log(obje2);