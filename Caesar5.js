const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS")

// Q1; By using : guests.indexOf("BRUTUS"), which will return 0 if done correctly.

guests.push("AUGUSTUS","LUCIA")

let spartacusIndex = guests.indexOf("SPARTACUS")


//Q2, -1 is the position value given when a requested item is not in a given index.

console.log(guests.indexOf("CASSIUS"))


guests.splice(3,1)
 

let VIPs = guests.slice(0,3)

guests.splice(0,3)

//Answerkey used

const honoredGuests = VIPs.slice(0, 1); // Extracts honored guests.
const otherGuests = VIPs.slice(1); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedVIPs = honoredGuests.concat(otherGuests); // Combines both arrays. 


console.log(guests)

console.log(VIPs)

console.log(spartacusIndex)

console.log(sortedVIPs)