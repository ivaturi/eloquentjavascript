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
