/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubled = []
    //prepares an array to be logged, won't notate every time I do this for redundancy
    for ( let i = 0; i < arr.length; i ++){
        doubled.push(arr[i] * 2)
        //takes each array item, doubles them, and pushes them
    }
    console.log(doubled)
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let evens = []
    for ( let i = 0; i < arr.length; i ++){
        if (arr[i] % 2 === 0){
            // checks if the the value is divisble by 2, y'know, EVEN 
            evens.push(arr[i])
            // and pushes it
        }       
    }
    console.log(evens)
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let splits = []
    for ( let i = 0; i < arr.length; i ++){
        splits.push( arr[i].charAt(0) + arr[i].charAt(arr[i].length - 1) )
        // that's a line and a half, takes the first character [0], and the last which can
        // be found by taking 1 from the length value, and combines them into one string and passes them into the array
    }
    console.log(splits)
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newList = []
     for ( let i = 0; i < arr.length; i ++){
        arr[i][key] = value
        //assigns the value we provide to the: 1. pre-exsistng item followed by 2. the provided key
        newList.push(arr[i])
        // and passes them as a single object to the array
     }
     console.log(newList)
}
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    const vList = "aeiou"
    let vCount = {}
     for ( let i = 0; i < str.length; i ++){
        let letter = str[i].toLowerCase();
        //turns the target character into lowercase and assigns an easy to type variable
        if (vList.indexOf(letter) !== -1 )
            //checks if the letter is a vowel, which our vList string contains all of them
        {
            vCount[letter] = (vCount[letter] || 0) + 1;
            //uses an OR to pass the emtpy value if it's the first occurence, or the current count if there is one, then adds 1
            // then assigns it 
        }
     }
     console.log(vCount)
}