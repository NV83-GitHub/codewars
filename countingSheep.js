// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

let sheepArray = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]


// function countingSheep(arr) {
//     return arr.filter(sheep => sheep === true).length 
// }

const countingSheep = arr => arr.filter(sheep => sheep === true).length

console.log(countingSheep(sheepArray))