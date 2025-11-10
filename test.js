const words = ['zombies', 'losers', 'zoo', 'frogs', 'foxes', 'zed', 'pork'] 

function myFilter(arr, callback,inputLetter){
    const filteredArray = [];
for(let i = 0; i < arr.length; i++){
if (callback(arr[i],)){
    filteredArray.push(arr[i])
}
}
    return filteredArray
}

function zFilter(inputWord,inputLetter){
    for (let j = 0; j < inputWord.length; j++){
        if (inputWord.indexOf(inputLetter) === -1)
        return false;
    else {
        return true;
    }
    }
}

console.log(myFilter(words, zFilter,'z'))