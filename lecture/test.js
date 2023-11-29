const array1 = [5, 12, 8, 130, 44];

const found = array1.find((el) => el > 10);
console.log(found);

console.log(array1.findLast((el) => el > 20));

const str = "abcde";

console.log(Array.from(str, (el) => `print: ${el}`));

console.log(Array.from({ length: 10 }, () => 2));

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log(arr2.flat(1));
console.log(arr2.flat(2));
console.log(arr2.flat(3));

console.log(array1.filter((el) => el > 10));

const strarr = ["abc", "vcacsw", "zcda", "dcda", "cdwddw"];
const numarr = [1, 2, 100, 32, 53, 412, 3, 23];

// sort default 오름차순
console.log(strarr.sort());

// sort default 내림차순
console.log(
  strarr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  })
);

// sort 숫자정렬 불가, 문자열로 인식.
console.log(numarr.sort());
// sort 숫자정렬 오름차순
console.log(numarr.sort((a, b) => a - b));
// sort 숫자정렬 내림차순
console.log(numarr.sort((a, b) => b - a));

// some
console.log(strarr.some((el) => el === "abc"));


const func = (arr, value) => {
  return arr.some((el) => el === value);
};

console.log('-'.repeat(100))
console.log(func(strarr, 'abc'))

