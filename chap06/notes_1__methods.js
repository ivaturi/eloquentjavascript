/*
  Methods are properties of objects that hold functions as their values

  e.g:

    var object = {};  <<<< This is an object
    object.method = function(param){function_body}; <<< This is a method of object
*/

var animal = {};
animal.speak = function(line){console.log("The animal says '" + line + "'");};

//invoking a method of an object
animal.speak("Hi!");

/*
  More commonly, methods of an object are used to do something to the object itself
  In such cases, 'this' refers to the object that the method belongs to.
*/
function speak(line){
  console.log("The " + this.type + " says '" + line + "'");
}
var animal1 = {type: "mouse", speak: speak};
var animal2 = {type: "cat", speak:speak};
animal1.speak("Squeak!");
animal2.speak("Meow!");

// we can also use 'apply' to pass arguments to the speak method.
speak.apply(animal1, ["Applied squeak"]);
