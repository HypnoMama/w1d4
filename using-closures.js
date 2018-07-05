function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = 0



  return function() {
    /* your code here */
    if (i < list.length){
      i++
    } else {
      i=1
    }
    return list[i-1]
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


//we need a variable incremetor variable
//starts at 0 and makeLoadedDie should return list[0] on first go
//then we increment i so that makeLoadedDie returns list[1] on the next go
//ultimately we would have to return i to 0 when i > list.length

//rollLoadedDie returns the final value of makeLoadedDie which needs to be list[i]

var countdownGenerator = function (x) {
  /* your code here */
  var d = x;


  return function() {
    if (d > 0) {
      console.log("T-minus " + d + "...")
      d--
    } else if (d === 0) {
      console.log("Blast Off!");
      d--
    } else {
      console.log("Rocket's already gone, Bub!")
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
