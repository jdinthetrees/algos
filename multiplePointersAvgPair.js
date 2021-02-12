function averagePair(arr, num){
    // set your start and end
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
    //   move your start and end inwards
      else if(avg < num) start++
      else end--
    }
    return false;
  }
  
  console.log(averagePair([1,2,3], 2.5));//true