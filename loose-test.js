// small helpers

const sum = (xs) => xs.reduce((a, b) => a + b, 0);

const uniq = (xs) => [...new Set(xs)];

console.log(sum([1, 2, 3]));
