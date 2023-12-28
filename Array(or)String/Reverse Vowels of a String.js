const reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = s.length - 1;
  let result = s.split("");

  while (left < right) {
    if (!vowels.has(s[left])) {
      left++;
    } else if (!vowels.has(s[right])) {
      right--;
    } else {
      [result[left], result[right]] = [result[right], result[left]];
      left++;
      right--;
    }
  }
  return result.join("");
};

// question link: https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */
