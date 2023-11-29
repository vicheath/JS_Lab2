//Part 1
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

//Part 2
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let n = 5
while (n < 43){

    let prime = true;
    let div = 2;
    while(div <= Math.sqrt(n)){
        if (n % div === 0){
            prime = false;
            break;
        }
        div ++;
    }
    if(prime){
        console.log(n + ' Prime')
    }
    n++
}


// Part 3
// CSV data looks like this:

// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26



let cell = [
    ["ID", "Name", "Occupation", "Age"], 
    [42, "Bruce", "Knight", 41],
    [57, "Bob", "Fry Cook", 19],
    [63, "Blaine", "Quiz Master", 58],
    [98, "Bill", "Doctors Assistant", 26],
]
// cell.length = 5


for (let i = 0; i < cell.length; 
    i++)
{console.log(cell[i])}
