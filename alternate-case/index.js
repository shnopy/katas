function alternateCase(s) {
  let res = [], a = '', b = '';
  for (char in s) a += char % 2 ? s[char].toLowerCase() : s[char].toUpperCase(), b += char % 2 ? s[char].toUpperCase() : s[char].toLowerCase()
  res.push(a, b);
  return res;
}

console.log(alternateCase("abcabcdef"))