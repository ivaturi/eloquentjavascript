/*
  Exercise #1
  -----------

  Write a range function that takes two arguments, start and end, and returns
  an array containing all the numbers from start up to (and including) end.

  Next, write a sum function that takes an array of numbers and returns the sum
  of these numbers. Run the previous program and see whether it does indeed
  return 55.

  As a bonus assignment, modify your range function to take an optional third
  argument that indicates the “step” value used to build up the array. If no
  step is given, the array elements go up by increments of one, corresponding
  to the old behavior. The function call range(1, 10, 2) should return
  [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
  range(5, 2, -1) produces [5, 4, 3, 2].
*/

// function to output a range array
function range(lower,upper){
  var out = []; //initialize an empty array
  for(var i = lower; i <= upper; i+=1){
    out.push(i); // populate the array
  }
  return out;
};

// test
console.log(range(1,10));

// function to output a range array with an optional step size
function rangeStep(begin, end, step){
  step = arguments.length < 3 ? (begin < end ? 1 : -1 ): step; //compute step size
  var out = []; // initialize an empty array
  if(step > 0){ //increasing
      for(var i = begin; i <= end; i += step){
        out.push(i);
      }
  }
  else{ //decreasing
      for(var i = begin; i >= end; i+= step){
        out.push(i);
      }
  }
  return out;
};

//test
console.log(rangeStep(12, -3,-3));

/*
  Exercise #2
  -----------
  Reversing an array

  Arrays have a method reverse, which changes the array by inverting the order
  in which its elements appear. For this exercise, write two functions,
  reverseArray and reverseArrayInPlace.

  The first, reverseArray, takes an array as argument and produces a new array
  that has the same elements in the inverse order.

  The second, reverseArrayInPlace, does what the reverse method does: it
  modifies the array given as argument in order to reverse its elements.

  Neither may use the standard reverse method.
*/

// reverse an array
function reverseArray(inArray){
  var outArray = []; //initialize empty array
  for(var i = inArray.length - 1; i >= 0; i -= 1){
    outArray.push(inArray[i]);
  }
  return outArray;
}
//test
console.log(reverseArray(["A","B","C","D"]));

// reverse an array in-place
function reverseArrayInPlace(inArray){
  for(var i = 0; i <= Math.floor(inArray.length/2); i++){
      var j = (inArray.length - 1) - i;
      var temp = inArray[j];
      inArray[j] = inArray[i];
      inArray[i] = temp;
  }
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


/*
  Exercise #3
  -----------

  Objects, as generic blobs of values, can be used to build all sorts of data
  structures. A common data structure is the list (not to be confused with the
  array). A list is a nested set of objects, with the first object holding a
  reference to the second, the second to the third, and so on.

    var list = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    };

  The resulting objects form a chain.

  A nice thing about lists is that they can share parts of their structure.
  For example, if I create two new values
    {value: 0, rest: list} and {value: -1, rest: list}
  (with list referring to the variable defined earlier), they are both
  independent lists, but they share the structure that makes up their last
  three elements. In addition, the original list is also still a valid
  three-element list.

  Write a function arrayToList that builds up a data structure like the
  previous one when given [1, 2, 3] as argument, and write a listToArray
  function that produces an array from a list.

  Also write the helper functions prepend, which takes an element and a list
  and creates a new list that adds the element to the front of the input list,
  and nth, which takes a list and a number and returns the element at the
  given position in the list, or undefined when there is no such element.

  If you haven’t already, also write a recursive version of nth.
*/

//convert an array to a list, iterative
function arrayToList(inArray){
  var list = null;
  for(var i = inArray.length -1 ; i >= 0; i--){
    list = {value : inArray[i], rest: list};
  }
  return list;
}

//convert an array to a list, recursive (without destroying the array)
function arrayToListRecursive(inArray){
  if(inArray.length < 1)
    return null
  else
    return {value : inArray[0], rest : arrayToListRecursive(inArray.splice(1,inArray.length - 1))};

    // This destroys the array...
    //return {value : inArray[0], rest : arrayToListRecursive(inArray.splice(1,inArray.length - 1))};
}
//test
console.log(arrayToList([10,20]))
console.log(arrayToListRecursive([1,2]));


//prepend an element to a list
function prepend(element, list){
  return {value:element,rest:list};
}
//test
console.log(prepend(10,prepend(20,null)));

//return the nth item in a list
function nth(list, n){
  var item = undefined;
  for(var node = list, counter = 0; node; node = node.rest, counter++){
    if(counter==n-1){
      item = node.value;
    }
  }
  return item;
}

//return the nth item in a list, recursive
function nthRecursive(list,n){
      return n==1 ? list.value : nthRecursive(list.rest,n-1);
}
//Test
console.log(nth(arrayToListRecursive([10,20,30]),2));

var arr = [10,20,30,40,50,60,70,80,90];
var list = arrayToListRecursive(arr);
console.log(nthRecursive(list,6));


//deep object equality
function deepEqual(a, b) {
  //check that each input is a non-null object
  if( (typeof a == "object" && a != null) && (typeof b == "object" && b != null)){
    //does each object have the same number of keys?
    if(Object.keys(a).length != Object.keys(b).length){
      return false;
    }
    //check each property
    for(var property in a){
      if(b.hasOwnProperty(property)){
        //yes, same property. now go one level deeper
        if( !(deepEqual(a[property],b[property])) ){
          return false;
        }
      }
      else{
        return false;
      }
    }
    return true;
  }
  else if(a !== b){
    return false;
  }
  else{
    return true;
  }
}

//test
var obj = {here:{is:"an"},object:2};
console.log(deepEqual(1,"string")); // false
console.log(deepEqual(null,{test:"object"})); //false
console.log(deepEqual(null,null)); // true
console.log(deepEqual(obj,obj)); // → true
console.log(deepEqual(obj,{here:1,object:2})); // → false
console.log(deepEqual(obj,{here:{is:"an"},object:2})); // → true
