// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = buildCharMap(str);
  let max = "";
  let maxNum = 0;

  for (char in chars) {
    if (chars[char] > maxNum) {
      max = char;
      maxNum = chars[char];
    }
  }
  return max;
}

const buildCharMap = str => {
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  return chars;
};

module.exports = maxChar;
