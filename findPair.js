// Given an unsorted array of integers, find a pair with a given sun in it.

// Input: 
let arr = [8, 7, 2, 5, 3, 1]
let sum = 10

// Output:
// Pair found at index 0 and 2 (8 + 2)
// or
//extra credit
// Pair found at index 1 and 4 (7 + 3)

function findPair(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j< arr.length; j++) {
            if(arr[i] + arr[j] === sum) {
                return  `Pair found at index ${i} and ${j} (${arr[i]} and  ${arr[j]})`;
            }
        }
    }
    Return `Pair not found`;
}

// loop through the original array and store all values in a dictionary
// dictionary key is the array value
// dictionary value is the array index
// loop back through the original array
// query our dictionary for the sum - current array value

let arr = [8, 7, 2, 5, 3, 1]
let sum = 10
console.log(findPair(arr, sum));

function findPairDict(arr, sum) {
    const opKeys = {};

    for(let i=0; i < arr.length; i++) {
        opKeys[arr[i]] = i;
    }

    for(let j = 0; j < arr.length; j++) {
        let target = sum - arr[j];
        if(opKeys[target]) {
            console.log(`Pair found at index ${j} and ${opKeys[target]} (${arr[j]} +  ${target})`);
        }
    }
}

let arr = [8, 7, 2, 5, 3, 1]
let sum = 10
findPairDict(arr, sum);

function findPair(arr, sum) {
    if(arr.length <= 1){
        return 'all out of pairs!'
    }
    let num = 0
    let sub = arr[num]
    for(let j = arr.length; j > 0; j--) {
        if(arr[j] == sub) {
            console.log(`Pair found at index ${num} and ${j} (${arr[num]} + ${arr[j]}) Number 2`)
            arr[j] = arr[arr.length-1]
            arr.pop()
            num++
            findPair(arr, sum)
        }
    }
}



let arr = [8, 7, 2, 5, 3, 1]
let sum = 10
findPair(arr, sum);