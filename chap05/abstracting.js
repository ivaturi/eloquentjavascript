/*
  Abstraction is essentially hiding certain details of the implementation and dealing with the more *essential* features of the object or the function.

  This helps to improve understandability/maintainability of the code. IT also lets us deal with issues at a more abstract level
*/


// core function for traversing an array:
var num_array = [10,20,30,40,50,60,70,80];
var str_array = ["I","am","an","array"];
for(var i = 0; i < num_array.length; i++){
  console.log(num_array[i]);
}

//instead of repeating this core functionality everywhere
//we can abstract away functionality by defining a method:
function traverseArray(a){
  console.log("(traverseArray)");
  for(var idx in a){
    console.log(a[idx]);
  }
};
//test
traverseArray(str_array);

// we can even pass functions...
function arrayOperate(in_array,in_method){
  console.log("(arrayOperate)");
  for(var idx in in_array){
    in_method(in_array[idx]);
  }
}
//test - halve each array item
arrayOperate(num_array,function(x){console.log(x/2);});
