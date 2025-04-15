function sumUpto(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
       result += i;
   }
    return result;
}
const output = sumUpto(2);
console.log(output);