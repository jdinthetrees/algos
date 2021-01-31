// write a function which accepts an array of integers and a Number. 
// function should calculate the max sum of n consecutive elements in the array

//sliding window pattern creates window which can either be an array or 
// number from one position to another.  depending on condition, window increases
// or closes and a new window is created. useful for keeping track of a subset of data

//naive approach with nested loops
function maxSubarraySum(arr, num) {
    //edge case if arr is empty
    if(num > arr.length){
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num +1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp+= arr[i + j];
        }
        if (temp> max) {
            max = temp;
        }
        // console.log(temp, max);
    }
    return max;
}



console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));

//sliding window approach
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    //edge case if arr is empty
    if(arr.length < num) return null;
    //create first sum store in maxSum variable
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    //create temp sum 
    for(let i = num; i < arr.length; i++) {
        //subtract the first value in window, add teh next value
        tempSum = tempSum - arr[i - num] + arr[i];
        // console.log(tempSum, maxSum);
        maxSum = Math.max(maxSum, tempSum);
    }
  return maxSum;
}



console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));//19 O(N) time complexity we onlu loop one time
