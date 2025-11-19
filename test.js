// function makePerson(first,last,age){
//     return{
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true,
//     }
// }
function makePerson(first,last,age){
    return{
        first,
        last,
        age,
        isAlive: true,
    }
}


console.log(makePerson("Jim",'Gordon',50))

const mathStuff = {
    x:200,
    add(a,b){
        return a + b;
    },
    square(a){
        return a ** 2;
    },
}
console.log(mathStuff.add)
console.log(mathStuff.add(3,7))
console.log(mathStuff.square(2))
//'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'
function makeColor(name,hex){
return {
[name]:hex,
[hex]:name,
};
}
console.log(makeColor('periwinkle', '9c88ff'))