function printBadges(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
    }
    return arr;
}

function tailsNeverFails() {
    function maybeTrue() {
        return Math.random() >= 0.5;
    }

    let numberTails = 0;

    while (maybeTrue()) {
        numberTails++;
    }

    return `You got ${numberTails} tails in a row!`;


}