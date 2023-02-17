//  Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.
// for eg:
// let a = [4,5, 10, 11, 1];
// let k = 3;
// The maximum is 26.

let array = [4, 5, 10, 11, 1, 7, 9, 10];
let k = 4;
let em = [];
for (let i = 0; i < array.length - (k - 1); i++) {
  let sum = 0;
  for (let j = i; j < k + i; j++) {
    sum = sum + array[j];
  }

  em.push(sum);
}
console.log(em);
let max = em[0];
for (let i = 1; i < em.length; i++) {
  if (max < em[i]) {
    max = em[i];
  }
}
console.log(max + " is the largest number ");
