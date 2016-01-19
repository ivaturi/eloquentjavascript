/*
  Higher-order functions
  ---------------------

  These are functions that operate on other functions.
  A function can be passed variables or other functions as arguments, allowing for abstract definitions of methods/functions, and not just variables.
*/

function divisibleBy(n){
  return function(m){ return m%n==0;}
};

//here's where the abstraction helps us...
var divisibleBy10 = divisibleBy(10);
var divisibleBy3 = divisibleBy(3);
//test
console.log(divisibleBy10(2));
console.log(divisibleBy10(100));
console.log(divisibleBy3(21));


/*
  We can write functions that change other functions, too.

 Task - check the performance of divisibleBy using the divisor_array and the test_array arrays.
 How? - create a test function that automatically creates instances of different divisibility tests and computes the results.
 */
function test(functionTemplate){
    return function(functionCreator,functionInput){
      var result = functionTemplate(functionCreator)(functionInput);
      console.log(functionTemplate," created with ", functionCreator, "- checked with ",functionInput,"- got", result);
    }
}
var divisor_array = [2,3,7];
var test_array = [2,12,6,8,9,21,23];
for (var a = 0; a < divisor_array.length; a++) {
  for(var b = 0; b < test_array.length; b++){
    test(divisibleBy)(divisor_array[a],test_array[b]);
  }
}

/*
  We can play around with control flow, using higher-order functions...
*/
function repeat(times, body){
  for(var i = 0; i < times; i++){
    body(i);
  }
};

function check(test, then){
  if(test){
    then();
  }
};

repeat(10,function(n){
  check(n%2==0,function(){
    console.log(n, "is even");
  })
});
