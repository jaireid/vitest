const arr = [1,3,5,7];

export function sum(arr) {
  return arr.reduce((acc, cur) => acc += cur);
}

console.log(sum(arr));