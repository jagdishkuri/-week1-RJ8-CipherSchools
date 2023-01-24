// const arr = [2,3,4,5,6];
// const arr2=[];
// for(let i=0;i<arr.length;i++){
//     arr2[i]=arr[i]*arr[i];
// }
// console.log(arr);

// function myFunction(item){
//     return item*3;
// }
// const arr3 = arr.map(myFunction);
// console.log(arr3);
// const arr4 = arr.map((item)=>{
//     return item*item;
// });
// console.log(arr4);
// const arr = [1,2,3,4,5];
// arr.forEach((element, index)=>{
//     console.log(element);
// });
  //filter
//   let array = [10,20,30,40,50];
//   let array2 = array.filter((element)=>{
//     return element>=30;
//   }) 
//   console.log(array2);
//find
// let array = [1,2,3,4,5];
// let newarray= array.find((element)=>{
//     return element>4;
// })
// console.log(newarray);
//short
// let array = [10,20,50,11,30,12];
// let newarray=array.sort((el1, el2)=>{
//     el1= Number(el1);
//     el2= Number(el2);
//     return el1-el2;
// });
// console.log(newarray); 

//object destructuring
// let obje={
//     name: "alex",
//     age: 24,
//     address:{
//         street: "sikar",
//         state: "Rajasthan",
//     country:"India",
//     passportDetails:{ 
//         passport: "Indian",
//     },
//     },
// }
// let {Name1, Age1}= obje.address;
// console.log(Name1);
// console.log(Age1);

// let arr=[2,3,4,5,6];
// let [a, b]=arr;
// console.log(a);
// console.log(b);

// let arr1=[1,2,3,4,5];
// let arr2=arr1;
// if(arr1==arr2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// class animal{
//     typeOfAniaml;
//     noOfLegs;
//     color;
//     Family;

//     constructor(typeOfAniaml, noOfLegs,color,Family){
//         this.typeOfAniaml=typeOfAniaml;
//         this.noOfLegs=noOfLegs;
//         this.color=color;
//         this.Family=Family;
//     }
//     showfamily(){
//         console.log("happy family");
//     }

// }
// let Animal= new animal("bird", 2, "blue", "rodent");
// console.log(Animal);
// Animal.showfamily();