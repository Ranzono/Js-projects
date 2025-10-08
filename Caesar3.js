const randomDecimal = Math.random();

//answer key used for this step
const range = 33 - 3 + 1; // 31
// Question1: answer key used : to ensure we include both endpoints of our range, 3 and 33, so we have a total of 31 possible numbers (from 3 to 33 inclusive).

const randomMultiple = randomDecimal * range

// Question2: Because the multiplied decimal cannot excced the number it is multiplied by, but can get close depend on what is generated.

const randomInte = Math.floor(randomMultiple)

//Question3: We use Math.floor() to round down the decimal number to the nearest whole number, ensuring we get an integer value without going higher than our deired range.

//answer key used for this step
const shiftValue = randomInte + 3;

// Question4: We add 3 to the random integer to shift the range from 0-30 to 3-33, ensuring our final shift value falls within the desired range of 3 to 33.