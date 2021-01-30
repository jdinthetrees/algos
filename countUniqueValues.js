// implement a function which accepts a sorted Array, and counts the unique values in 
// the Array. there can be negative numbers in the Array, but it will always be sorted.

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    //j acts as scout pointer that goes interates arr
    for(var j = 1; j < arr.length; j++) {
        //we compare j to i, and move i to teh right if it meets condition
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,2,2,5,7,7,99]));
