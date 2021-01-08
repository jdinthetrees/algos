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