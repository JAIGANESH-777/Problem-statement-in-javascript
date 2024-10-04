m = 10;
n = 5;
if (m > n) console.log(1);
let sum = 1;
for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    sum *= i;
  }
}
console.log(sum);
