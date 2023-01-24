function addTwoNumbers(num1, num2){
    return new Promise((fullfiled, notfullfiled) => {
  
        setTimeout(() => {
            console.log("Inside SetTimeOut");
            fullfiled(num1+num2);
        }, 5000);
          
       
      })
      
}

addTwoNumbers(32, 10)
  .then(() => {
    console.log("promise is fullfiled");
  })
  .catch(() => {
    console.log("promise is not fullFiled");
  });
