const scores = [0,0,0,8,24,35,45,68,74,81,96,100]
function myFind(arr, callback){
    for ( let i =0; i < arr.length; i++ ){
       if (callback(arr[i],i,arr) === true)
        return arr[i]
    }
};
//  console.log(myFind(scores,function(score){
// return score > ;
// }));

function myFindIndex(arr, callback){
    for ( let i =0; i < arr.length; i++ ){
       if (callback(arr[i],i,arr) === true)
        return i;
    }
    return -1
};

console.log( myFindIndex(scores, function(score){
    return score > 40;
}));