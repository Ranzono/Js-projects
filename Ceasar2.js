const friend = "BRUTUS"
const shiftValue = 3;
let alphabet = "abcdefghijklmnopqrstuvwxyz"

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());
// answer key used for this step//

// Question 1, "Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?"//
//This is due to the index count starting at 0 for the first digit/letter. //

const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];
// answer key used for this step//

// Question 2, by using '%', answer key used for this step// 

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];
// answer key used for this step//
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
// answer key used for this step//