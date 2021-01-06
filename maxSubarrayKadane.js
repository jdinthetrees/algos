// The ProblemThe Maximum Subarray problem gives us an array of 
// numbers and asks us to return the sum of the longest contiguous subarray.

// Kadane’s AlgorithmInput: [-1,5,2,-2,1,3,-4,2,-5,6]
function MaxSubArray (arr){
    // store current max, value to keep track of largest sum
    let max = -Infinity;
    // store current sum
    let currentSum = 0;
    //iterate over arr
    for(let i=0;i<arr.length;i++){
        // add current value in array to current sum, gives us new currentSum and this is dynamic programming
        currentSum = Math.max(arr[i], arr[i] + currentSum)
        // check if current sum is greater than max
        if(currentSum > max) {
            max = currentSum;
        }
        
        
    }
    return max
}

console.log(MaxSubArray ([-1,5,2,-2,1,3,-4,2,-5,6]));//output 9