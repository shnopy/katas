function pluck(objs, name) {
  let res = [];
  Object.keys(objs).forEach(i => res.push(objs[i][name]));
  return res;
}

console.log(pluck(
  [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
    { a: 10, b: 11 }
  ],
  'b'
));