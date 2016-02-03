/*
  Constructors
  -----------

  To create objects from a shared prototype, we can use a *constructor*.
  When instances are created from a constructor, each instance will have its own reference to the *this* variable

  more information : http://stackoverflow.com/a/16063711
*/

//a basic car constructor, with a an input for color
function carConstructor(color){
  this.color = color;
};

var whiteCar = new carConstructor("white");
var blackCar = new carConstructor("black");
console.log(whiteCar.color);
console.log(blackCar.color);

/*
  All constructors are automatically assigned a property called *prototype*.
  This prototype is an empty object, derived from Object.prototype
*/

// This is the prototype property of the car constructor
console.log(carConstructor.prototype);   // <<<<< {}

// the prototype property can be used to define  methods that will be inherited by
// all instances of the constructor
carConstructor.prototype.setMaker = function(maker){this.maker = maker};

blackCar.setMaker("Mazda");
console.log(blackCar);


// OBS! the prototype of a constructor is not the same as the prototype of its instance
console.log(Object.getPrototypeOf(carConstructor) == Object.getPrototypeOf(whiteCar));

// the prototype of a constructor is Function.prototype
console.log(Object.getPrototypeOf(carConstructor));
// the prototype of an instance is an object
console.log(Object.getPrototypeOf(whiteCar));
