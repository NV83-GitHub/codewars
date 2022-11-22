// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

function setAlarm1(employed, vacation){
    if (employed === true && vacation === true) {
      return false
    }
    if (employed === false && vacation === true) {
      return false
    }
    if (employed === true && vacation === false) {
      return true
    }
    if (employed === false && vacation === false) {
      return false
    }
  }


// A better solution would have been 

const setAlarm2 = (employed, vacation) => employed === true && vacation === false ? true : false


// Ou encore  mieux
const setAlarm3 = (employed, vacation) => employed && !vacation


// Tests
console.log(setAlarm1(true,false))
console.log(setAlarm2(true,false))
console.log(setAlarm3(true,false))
console.log(setAlarm1(true,true))
console.log(setAlarm2(true,true))
console.log(setAlarm3(true,true))
