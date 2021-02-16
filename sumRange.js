function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }
 
 console.log(sumRange(4));//10

// return 4 + sumRange(3)  10
//             return 3 + sumRange(2)   6
//                 return 2 + sumRange(1)   3
//                     return 1 
 