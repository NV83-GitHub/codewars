// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else return "Odd"
}

// Tests
console.log(evenOrOdd(0))
console.log(evenOrOdd(1))
console.log(evenOrOdd(-1))
console.log(evenOrOdd(2))
console.log(evenOrOdd(75))
console.log(evenOrOdd(2087))

/////////////////////////////////////////////////////////////
// A cleaner solution 

function everOrOddClean(number) {
   return number % 2 === 0 ? "Even" : "Odd"
}

// Tests
console.log(everOrOddClean(-50))
console.log(everOrOddClean(180))
console.log(everOrOddClean(20))
console.log(everOrOddClean(0))
console.log(everOrOddClean(11))
console.log(everOrOddClean(1))