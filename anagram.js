function validAnagram(str1, str2) {
    //strings font match then imediately return false.
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("anagrams", "nagaramm"));
//{ a: 3, n: 1, g: 1, r: 1, m: 1, s: 1 }
// false

console.log(validAnagram("anagram", "nagaram"));
// { a: 3, n: 1, g: 1, r: 1, m: 1 }
// true
