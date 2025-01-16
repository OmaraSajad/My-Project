Guess the Number Game:
**Description:** 
Build a number guessing game where the user has to guess a randomly generated number within a certain range.
**Features:**
Generate a random number between 1 and 100.
Allow the user to input guesses.
Use conditional statements to give feedback (too high, too low, or correct).
Limit the number of guesses and provide a "game over" message if they exceed the limit.
To generate a random number between 1 and 100 , you can use the Math.random() function, which generates a floating-point number between 0 (inclusive) and 1 (exclusive). You can then scale and shift this value to fit your desired range.
then scale and shift this value to fit your desired range.
Logic Building:
Generate a random floating-point number: Use Math.random() to get a value between 0 and 1.
Scale to the desired range: Multiply the result by 100 to scale it to the range [0, 100).
Shift to the desired range: Add 1 to shift the range from [0, 100) to [1, 101).
Round the result: Use Math.floor() to round down to the nearest whole number, making the range [1, 100].
Math.random() generates a number in the range [0, 1).
Math.random() * 100 scales it to the range [0, 100).
Math.floor() ensures it is an integer.
Adding 1 shifts the range to [1, 100].
This logic will give you a random integer between 1 and 100 inclusive.
