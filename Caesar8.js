const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter,shiftVal){
  let index = alphabet.indexOf(letter.toLowerCase());
  // finds the num value of letter in alphabet
  let encryptedLetter = (index + shiftVal) % alphabet.length
  //performs the shift
  return alphabet[encryptedLetter]
  // returns the new value as a letter
}

function encryptMessage(word,shiftVal){
    let message = []
    //gives us an array to use
for ( let i = 0; i < word.length; i ++){
    let j = word[i]
    //grabs the needed letter to use as an input
  message.push(encryptLetter(j,shiftVal))
  //encrypts the input and adds it to the array
}  
let encMessage = message.join('');
//turns the array into a string
return encMessage.toUpperCase()

}

 function decryptLetter(letter,shiftVal){
    let index = alphabet.indexOf(letter.toLowerCase());
  // finds the num value of letter in alphabet again
  const k = alphabet.length
  let decryptedLetter = (index - shiftVal + k ) % k;
  //performs the shift and ensures that negative wrapping is successful
  return alphabet[decryptedLetter]
 }

 function decryptMessage(word,shiftVal){
    let message = []
for ( let i = 0; i < word.length; i ++){
    let j = word[i]
  message.push(decryptLetter(j,shiftVal))
}  
let decMessage = message.join('');
return decMessage.toUpperCase()
 }

console.log(encryptMessage(friend,shiftValue));
console.log(decryptMessage('EUXWXV',shiftValue));

//Yes, since decrypting (done correctly) will return the original word