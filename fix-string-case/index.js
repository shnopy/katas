function solve(s) {
  let count_high = 0, count_low = 0;
  for (char in s) s[char] === s[char].toUpperCase() ? count_high++ : count_low++;
  return count_high > count_low ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("code"), solve("COde"));