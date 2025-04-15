function multi_table(n) {
    let result = "";
    for (i = 1; i <=12; i++) {
      result +=  `${n} x ${i} = ${n*i}\n`
    }
    return result;
}

const output = multi_table(2);
console.log("Multiplication Table:\n" + output);