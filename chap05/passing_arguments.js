/*
  Passing along arguments
  ----------------------
  The *arguments* object can be used by a calling function, to pass any parameters it receives to any other function that it calls.
*/

function passArguments(passedFunction){
  return function(){
    return passedFunction.apply(null, arguments);
  }
}
//test
passArguments(console.log)(1,2,3);
console.log(passArguments(Math.pow)(2,4));
