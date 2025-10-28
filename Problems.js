function fizzBuzz(n){
    if (n >= 1 && n <= 99){
for (let i = 1; i <= n; i++){
if (i % 3 === 0 && i % 5 === 0 )
    console.log('FizzBuzz');
else if (i % 3 === 0)
    console.log('Fizz');
else if (i % 5 === 0)
    console.log('Buzz');
else if ( i > 0 && i < 100)
    console.log(i);
}
    }
else 
    return console.log('Error')
}

//fizzBuzz(15)

function letterOccurrence(word){
   let dic = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']
   let Contains = {}
  for (let i = 0; i < word.length ; i++){
    let index = word.toLowerCase()[i]
    let letter = dic.indexOf(index)
    if ( letter === -1  ){
     console.log('ERROR');
     return;
    }
    const key = dic[letter]
    if (Contains[key] === undefined ){
        Contains[key] = 1
    }
    else {
        Contains[key] += 1
    }
  }
  console.log(Contains)
}
letterOccurrence('Springboard')