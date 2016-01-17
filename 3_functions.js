// Notes on functions, from http://eloquentjavascript.net/03_functions.html


//----------------------//
/****** Functions *******/
//----------------------//


/*
 Functions are defined just like regular variables
 In this case, it just happens that the variable is a function
*/
var testFunction = function(){
    console.log("This is a test function");
}
testFunction();

// Functions can take no parameters...
var noParams = function(){
  console.log("This function takes no parameters")
}
noParams();

// Function can also take multiple parameters.
var perimeter = function(width, height){
  return 2 * (width + height);
}
console.log("The perimeter is " + perimeter(3,4));


//-------------------------------//
/***** Parameters and scopes *****/
//-------------------------------//

/*
 Variables created with the var keyword are local to the function
 where they are defined.
*/
var param1 = function(){
  var test_param1 = "This variable is only available within the param1() function";
  console.log(test_param1);
}
param1();
// console.log(test_param1);  <---- This will fail.

// Variables created outside the context of any function are global
var test_param2 = "global";
var param2 = function(){
  var test_param2 = "local";
  console.log(test_param2);
}
console.log(test_param2);
param2();

// Global variables can still be modified by any function
var test_param3 = "global value";
var param3 = function(){
  test_param3 = "local value";
}
param3(); // <--- changed to "local value"
console.log(test_param3);

//---------------------------------------------------//
/***** Nested Scope (functions within functions) *****/
//---------------------------------------------------//

// Functions can be created inside functions...just like variables.
var car_drive = function(){
    var start = function(){
      console.log("Status: Car started");
    }
    var gear = function(gearNum){
      console.log("Status: Gear shifted to " + gearNum);
    }
    var cruise = function(distance){
      console.log("Status: Cruising for " + distance + "km");
    };
    var stop = function(){
      console.log("Status: Car stopped");
    };
    var park = function(){
      console.log("Status: Car parked");
    };
    start();
    gear(1);
    cruise(1);
    gear(2);
    cruise(2);
    cruise(0.5);
    gear(3);
    cruise(50);
    stop();
    park();
  };
car_drive();

// Functions can be passed around as values...
var vehicle = function(num_passengers){
  passengers = num_passengers;
  return function(){return passengers};
}
var car = vehicle(4);
console.log("A car has " + car() + " passengers");
var bike = vehicle(2);
console.log("A bike has " + bike() + " passengers");

// Recursion is pretty cool
function power(base, exponent){
  return exponent == 0 ? 1 : base * power(base, exponent - 1);
  }
console.log(power(4,4));
