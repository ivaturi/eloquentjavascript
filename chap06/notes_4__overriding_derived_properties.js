/*
  Overriding derived properties
  ----------------------------
  When we add properties to instances, these properties are then only applied to the instances and not the constructors.
*/

// constructor
function car_prototype(maker){
  this.wheels = 4;
  this.gears  = 6;
  this.maker = maker;
};

// instance
var A4 = new car_prototype("Audi");
// Adding properties to instances leaves the constructor unmodified:
A4.price = 200000;
// A5 does not have the 'price' property, since this is only applied to the A4 instance.
var A5  = new car_prototype("Audi");
console.log(Object.keys(A5));


/*
  If the constructor happens to already have a property of the same name, any value assigned to this property in instances of the constructor will not change the value of the property in the constructor.
*/
A4.gears = 3;

// a new instance of the constructor will still have gears set to 6, since the constructor is unmodified.
var ceed = new car_prototype("Kia");
console.log("Ceed has " + ceed.gears + " gears");
