// write a function which accepts a sorted array of integers.  The function should 
// find the first pair where the sum is zero.  return an array that includes both values
// that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));//[-2,2] time complexity - O(N^2), space complexity-O(1)

//multiple pointers pattern

function sumZero(arr) {
    //declare left and right pointers
    let left = 0;
    let right = arr.length -1;
    //this is our fail safe, otherwise we could get [0,0] which is false positive
    while(left< right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
            //if sum is greater than zero move right pointer left
        } else if (sum > 0){
            right--;
            //if sum is less than zero move left pointer right
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));//[-2,2] time complexity - O(N), space complexity-O(1)