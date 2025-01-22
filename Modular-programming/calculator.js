// One Way 

// async function addition(a,b) {
//     return a+b
    
// }

// async function subraction(a,b) {
//     return a - b    
// }

// async function asynCall() {
//     console.log('calling')  //it is used for showing the loading symbol
//     const result = await addition(2,3)
//     console.log(result)    
// }
// asynCall()

// another way
//hello
exports.addition = async (operator1, operator2) => {
    console.log("Result:", operator1 + operator2);
  };
exports.subraction = async (operator1, operator2) => {
    console.log("Result:", operator1 - operator2);
};
  