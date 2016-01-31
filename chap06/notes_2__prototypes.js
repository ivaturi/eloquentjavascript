/*
  Prototypes
  ----------

  Almost all javascript objects have a prototype; this is an object that has a default set of properties.

  If we invoke a method (or a property) of an object that we have not yet defined, the prototype of the object is invoked instead, and its properties are searched for the requested method.

*/

var empty = {};
//access a default property
console.log(empty.toString); // this outputs the definition of the toString method
console.log(empty.toString());

/*
  The 'getPrototypeOf' method of the Object class can be used to get the prototype of
  an object.
*/
console.log(Object.getPrototypeOf(empty)); //<<< {} The prototype is an empty object
console.log(Object.getPrototypeOf(Object.prototype)); // <<< The super-prototype is null


// different objects have different prototypes...

var isfunction = Object.getPrototypeOf(Math.ceil) == Function.prototype;
console.log(isfunction); // << true, since Math.ceil is a function

var isarray = Object.getPrototypeOf([1,2,3,4,5]) == Array.prototype;
console.log(isarray); // << true, since the input is an array


/*
  We can create objects from a specific prototype, using the 'create' method
*/
var car_prototype = {
    wheels    : 4,
    gears     : 6,
    color     : "white",
    maker     : null,
    testDrive : function(){
      console.log("This "+this.color+" car is made by " + this.maker);
    }
}
var A4 = Object.create(car_prototype);  // <<< create an object from the prototype
A4.maker = "Audi";
A4.testDrive();
console.log(Object.getPrototypeOf(A4)); // <<< shows the car_prototype object
