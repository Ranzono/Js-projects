const emblemClue1 = "Lion";
const emblemClue2 = "Grapes";
const emblemClue3 = 7;
let localOne = "null"
let localTwo = "null"
let localThree = "null"

if (emblemClue1 == "Eagle")
 {
 localOne = "Forum"
}
else if (emblemClue1 == "Lion")
{
    localOne = "Colosseum"
}
else {
    localOne = "Villa"
}

if (localOne == 'Forum' && emblemClue2 == 'Laurel')
{
    localTwo = "of Augustus"
}
else if (emblemClue2 == 'Grapes' || localOne == 'Villa')
{
    localTwo = 'of Pompey'
}
else 
{
    localTwo = 'oops'
}
switch (emblemClue3)
{
    case 7:
        localThree = 'North'
        break;
    case 3:
        localThree = 'South' 
        break; 
    case 9:
        localThree = 'East'
        break;
    case 4:
        localThree = 'West'
        break;          
}
console.log(localOne + ' ' + localTwo + ' to the ' + localThree)
// it is important to use == over === as the first option only checks if the values is the same, 
// while the second checks if value and type are the same. Which when numbers are involved can be tricky if you are working
//  with both the "number" type and the "text" type as you will need to ensure those types are specified.