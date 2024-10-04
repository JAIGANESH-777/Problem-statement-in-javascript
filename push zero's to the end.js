let arr = [3, 0, 0, 14, 17, 0];
let result = new Array(arr.length).fill(0);
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    result[j++] = arr[i];
  }
}
console.log(result);
