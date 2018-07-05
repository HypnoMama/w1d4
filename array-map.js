var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(object){
   var ary = [];
   for(var key in object){
     ary.push(object[key])
   }
   return Math.sqrt(ary[0]*ary[0] + ary[1]*ary[1])


});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);