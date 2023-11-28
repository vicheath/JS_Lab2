// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// index.js

let x = 1

while(x < 101){

    if(x % 3 === 0){
// Console.log(literal) = does not need to be declared - literaly spit this out
    console.log(x + ' Fizz')}
    if(x % 5 === 0){
        console.log(x +' Buzz')}
    if(x % 3 === 0 && x % 5 === 0){
            console.log(x + 'Fizz Buzz')}
    if(x % 3 !== 0 && x % 5 !== 0){
        console.log(x)}
    x++
}
