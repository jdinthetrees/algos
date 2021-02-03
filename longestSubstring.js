// Given a string s, find the length of the 
// longest substring without repeating characters.


let longestSubstring = function(str) {
    //quick case if s is null or empty return 0
    if(!str || str ==='') {
        return 0;
    }
    let startOfObservedSubstring = 0;
    let lengthOfObservedSubstring = 1;
    let maxLengthFound =1;

    for (let i=1; i<str.length; i++) {
        const substring = str.substring(startOfObservedSubstring, i);
        const charsPrevIndexInObservedSubstring = substring.indexOf(str[i]);
        if(charsPrevIndexInObservedSubstring >= 0) {
            //calculate where the next substring should start
            startOfObservedSubstring += (charsPrevIndexInObservedSubstring + 1);
              //figure out the length of newly defined substring based on new stat position
            lengthOfObservedSubstring += i - startOfObservedSubstring;
        } else {
            lengthOfObservedSubstring++;
            
            if(lengthOfObservedSubstring > maxLengthFound) maxLengthFound++;
        }
    }
    return maxLengthFound;
}

console.log(longestSubstring("abcabcbb"));//outputs 3

var lengthOfObservedSubstring = function(s) {

    let count = 0;

    for (let i =0; i< s.length; i++) {
        let char = s.charAt(i);
        let set = new Set([char]);
        //create another loop to check following characters as long as set contains nonrepeating characters
        for(let j=i+1; j<s.length; j++) {
            let char = s.charAt(j);
            if(set.has(char)) {
                break;
            } else {
                set.add(char)
            }
            count = Math.max(count, set.size);
        }
    }
    return count;
}

let result = lengthOfObservedSubstring('abcabcbb');
console.log(result);

//sliding window method

var lengthOfObservedSubstring = function(s) {
    let count = 0;
    //index of start of window
    let i = 0;
    // index of end of the window
    let j = 0;
    let n = s.length;
    let set = new Set();

    while (i < n && j < n) {
        let char = s.charAt(j);
        if(!set.has(char)) {
            set.add(char);
            //moves j to the right expands the window
            j++;
            //count is the difference between end of the window and the beginning of the window
            count = Math.max (count, j-i);
        } else {
            //moves i (left part of sliding window)
            set.delete(s.charAt(i));
            i++;
        }
    }


    return count;
}

let result = lengthOfObservedSubstring('abcabcbb');
console.log(result);


