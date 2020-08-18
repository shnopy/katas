function evenChars(string) {
  let res = [];
  if (string.length < 2 || string.length > 100) return "invalid string";
  for (char in string) parseInt(char) % 2 ? res.push(string[char]) : null;
  return res;
}