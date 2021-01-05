//frequency counter pattern

//write a function which accepts two arrays, function should return true if every value
//in the array has its corresponding value squared in the second array, frequency of values must be the same.
//remove squared value from second array


//naive approach O(n2) quadratic time, indexOf in this case is a nested loop
function same (arr1, arr2) {
    //if two arrays have different lengths, then we are done, no way it can be true
    if(arr1.length !== arr2.length) {
        return false;
    }
    //loop over first array,
    for(let i = 0; i <arr1.length; i++) {
        //ask what is index of arr1[i] in arr2?
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //if correctIndex is not present, return false
        if(correctIndex=== -1) {
            return false;
        }
        //if squared value is present in second array, remove from array via splice
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4]));


//time complexity O(n) two separate loops one time individually vastly better than two nested loops
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //we will create two objects to keep track of values
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //loop over arr1 using for of loop and add one to frequency, or initialize to one then do the same to arr2
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        //loop over first object to check to see if the square of key exists in second object
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //check to see if values correspond
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}



console.log(same([1,2,3,2,5], [9,1,4,4,11]));