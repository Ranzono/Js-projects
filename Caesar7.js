const friend = "BRUTUS"
const shiftValue = 3;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for( let i = 0; i < friend.length; i++ ){
    let letter = friend[i]
    // this attaches a variable to the selected letter of friend
    let index = alphabet.indexOf(letter);
    //grabs the correspoding letter of the alphabet's value
    let newIndex = (index + shiftValue) % alphabet.length;
    // shifts the value of the letter and gives it a new variable
    let encyptedLetter = alphabet[newIndex];
    //takes our new value and grabs the relevant letter
    console.log(encyptedLetter)
}

// Q1 a loop is preferable since it only needs the shift value and the word to be decrypted to change, the code handles the rest

// Q2 the % operator helps to ensure that we don't have problems if looping needs to happen