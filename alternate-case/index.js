function alternateCase(s) {
  let res = '';
  for (char in s) res += s[char] === s[char].toUpperCase() ? s[char].toLowerCase() : s[char].toUpperCase()
  return res;
}

console.log(alternateCase("abc"))