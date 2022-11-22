//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

testArray = [1, "2", 3, 4, "5", 6, "7", 8, "9", 10]


function sumMix(x) {
    y = x.map(element => typeof element !== "string" ? element : Number(element))
    return y.reduce((total, currentNum) => total + currentNum, 0)    
}

console.log(sumMix(testArray))