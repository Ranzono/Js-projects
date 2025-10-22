const friend = "BRUTUS"
const shiftValue = 3;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for( let i = 0; i < friend.length; i++ ){
    let letter = friend[i]
    let index = alphabet.indexOf(letter);
    let newIndex = (index + shiftValue) % alphabet.length;
    let encyptedLetter = alphabet[newIndex];
    console.log(encyptedLetter)
}

// Q1 a loop is preferable since it only needs the shift value and the word to be decrypted to change, the code handles the rest

// Q2 the % operator helps to ensure that we don't have problems if looping needs to happen