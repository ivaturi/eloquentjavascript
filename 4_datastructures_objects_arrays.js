// Chapter 4 - Data structures: Objects and Arrays

/**
  Arrays provide for storing sequences of values. An array can contain elements
  that are of different types (strings, numbers, other arrays, etc.)

  An element of an array is accessed by using square brackets on the name of the
  array. Array elements are zero-indexed.
**/

var my_array = [1,2,3,4,5,6, "string", [11,12,13,14]];
console.log(my_array[0]); // "1"
console.log(my_array[my_array.length-1]);

/**   Some common methods of arrays:  **/

//push an element at the end of the array (returns the new length of the array)
var new_length = my_array.push("This element is pushed");

//get the length of the array
console.log("my_array is of length " + my_array.length);

// Remove the last item from an array
my_array.pop();

// Remove the first item from an array
my_array.shift();

//loop over an array
my_array.forEach(function(item, index){
  console.log("Element #" + index + " : " + item);
})

// remove an element from a specified position
// (param1 = position, param2 = number of elements to remove from this position)
var removed_item = my_array.splice(1,1);
console.log(removed_item + " was removed");

// splice can also be used to insert elements:
var to_insert = ["insert", "this"];
my_array.splice(2,0,to_insert);


//copying an array
var new_array = my_array.slice();
console.log(new_array);

/*
  !OBSERVE!
  The length of an array can be manually reset.
  If the length is set to a value that is lesser than the array's original length,
  the array is truncated (elements are deleted)
*/
new_array.length = 3;
console.log(new_array);

/*
  !OBSERVE!
  If a new element is added to the array at an index that is out of bounds of the
  current length, *undefined* elements are added to make up for the unknown
  elements.
*/
new_array[6] = "mango";
console.log(new_array[3]);

// elements of an array can be joined into a string:
var test_array = ["Always","carry","a","towel"];
console.log(test_array.join(" "));

// two arrays can be concatenated thusly...
var question1 = ["the","answer"], question2 = ["is","42"];
console.log(test_array.concat(question1,question2));

// or even using the array prototype method
console.log(Array.prototype.concat.call([1,2,3],[4,5]));


/*************
  OBJECTS

  Objects are arbitrary collections of properties. Properties can be added and
  removed as we please.
**************/

//Objects can be created with the curly brackets notation:
var obj = {}  // Initializes an empty object

var obj2 = {
  property_1 : "this is a variable property",
  property_2 : function(){
    console.log("This is a method of the object ");
  },
  "property with spaces" : "this property name has spaces in it."
}
console.log(obj2.property_1);
obj2.property_2();
console.log(obj2["property with spaces"]);

//nonexistent properties return *undefined*
console.log(obj2.test_prop);

// properties can be assigned to the object outside of its definition
obj2.property_3 = "New property!";

//properties can be deleted
delete obj2.property_2;
console.log(obj2);

// The binary *in* operator can be used to check for existence of object
// properties
console.log("random_property" in obj2); // false

/*
  !OBSERVE!
  Different variables can simply be references to the same object
*/
  var object1 = {value:10};
  var object2 = object1;
  console.log(object1 == object2);
    // This is also changed to 14, since it refers to the same object in memory
  object1.value = 14;
  console.log(object2.value);
