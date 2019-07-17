// Code your solutions in this file

function printBadges(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
    }
    return array
}



// function randomator {
//     return = Math.random() >= 0.5
//  }
 
function tailsNeverFails() {
    let num_tails = 0
    while (Math.random() >= 0.5) {
        console.log("Tails")
        num_tails++
    }
    return `You got ${num_tails} tails in a row!`
}