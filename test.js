let nums = [5, 67, 7, 82]



function myMap(arr, callback){
    const mappedArray = [];
    for ( let i = 0; i < arr.length; i++){
      const val = callback(arr[i], i, arr);
       mappedArray.push(val) 
    }
    return mappedArray
}

const preNum = myMap(nums, function(num){
    return num * -1;
});

console.log(preNum)