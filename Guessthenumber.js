const prompt = require('prompt-sync')();
const randomnumber = Math.floor(Math.random() * 100 + 1);
console.log("Total number of guesses is 3.Good Luck!");
const guess1 = parseInt(prompt("Enter Your First Guess: "));
if (guess1 > randomnumber) {
    console.log("Too High");
}
else if (guess1 < randomnumber) {
    console.log("Too Loo");

}
else {
    console.log("Correct");
    return;
}
const guess2 = parseInt(prompt("Enter Your Second Guess: "));
if (guess2 > randomnumber) {
    console.log("Too High");
}
else if (guess2 < randomnumber) {
    console.log("Too Loo");

}
else {
    console.log("Correct");
    return;
}
const guess3 = parseInt(prompt("Enter Your Third Guess: "));
if (guess3 > randomnumber) {
    console.log("Too High");
}
else if (guess3 < randomnumber) {
    console.log("Too Loo");

}

else {
    console.log("Correct Answer");
    return;
}

console.log("LIMIT EXCEEDED. BETTER LUCK NEXT TIME!");


console.log("Correct answer is: ", randomnumber);    