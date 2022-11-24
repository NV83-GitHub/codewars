// Write function RemoveExclamationMarks which removes all exclamation marks from a given string

function RemoveExclamationMarks(s) {
    return s.split('').filter(char => char !== "!").join('')
}

// Une meilleure solution aurait été 

function RemoveExclamationMarks2(s) {
    return s.replace(/!/g, "")
}

console.log(RemoveExclamationMarks("hello !?!"))
console.log(RemoveExclamationMarks2("hello !?!"))