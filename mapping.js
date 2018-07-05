function ourMap (ary, cb) {
  //cb returns new ary
  //need to push item to an array
  //ourMap needs to return that array
  newAry = [];
  for (var i = 0; i < ary.length; i++) {
    newAry.push(cb(ary[i]))
  }
  return newAry
}


var words = ["ground", "control", "to", "major", "tom"];

console.log(ourMap(words, function(item){
  return item.toUpperCase()
}))

//ourMap needs to look at each individual item in the array, do some work to it according to the cb function,
//push that transformed item to an array
//return the new array
