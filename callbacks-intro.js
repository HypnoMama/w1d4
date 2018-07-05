
function findWaldo(arr, found) {
  arr.forEach(function(item){
    if (item === "Waldo") {
      found(arr.indexOf(item))
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
