function sumTwoSmallestNumbers(numbers) {
  let sort = numbers.sort((a, b) => a > b);
  return sort[0] + sort[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))