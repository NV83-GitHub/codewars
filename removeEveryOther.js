function removeEveryOther(arr){
    return arr.filter((element, index)=> index % 2 === 0);
  }

// Could be cleaner

const removeEveryOtherEl = arr => arr.filter((element, i) => i % 2 == 0)


// Tests


console.log(removeEveryOther(["A", "B", "C", "D", "E", "F", "G"]))
console.log(removeEveryOtherEl([1, 2, 3, 4, 5, 6, 7]))
