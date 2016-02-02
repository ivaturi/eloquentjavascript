/*
  Prototype interference
  ----------------------

  Methods or properties that are added to a prototype are inherited by every instance of the
  prototype.

  Sometimes, it is inconvenient having these methods/properties show up when iterating over an
  instance. To allow for this, the methods that are added to prototypes can be defined in
  one of two ways:

      - enumerable (default behavior)
      - nonenumerable

  In both of these cases, the 'in' operator claims that the instance includes these properties,
  even if they are only a apart of the prototype. To find out whether or not a property has
  been defined for an instance and not its prototype, we use the 'hasOwnProperty' method.
*/
var log = console.log;

//make a prototype Object
function doc(reg){
  this.registration = reg;
};

//create an instance
myBook = new doc("12/AFD 120 1/3");

// add a property to the prototype
doc.prototype.type = 'book';

//check that this property is inherited by the instance and is enumerable
log("type" in myBook); //<<< true

//we still know that property was not defined specifically for this instance
log(myBook.hasOwnProperty("type")); // <<< false

// add another property that we don't want every instance to publicly inherit
Object.defineProperty(doc.prototype, "custodian", {enumerable : false, value: "Arthur"});

// Is this property enumerable? (no)
log("custodian" in myBook); //<<< false

// However, we can still access this property
console.log(myBook.custodian);
