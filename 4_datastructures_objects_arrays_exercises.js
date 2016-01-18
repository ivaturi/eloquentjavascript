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
