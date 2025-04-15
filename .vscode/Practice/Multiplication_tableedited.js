function multiplication(n) {
    let result = ""; // to hold the full table as a string
    for (let i = 1; i <= 12; i++) {
        result+= `${n} x ${i} = ${n * i}\n`;
    }
    return result;
}

const output = multiplication(2);
console.log("Multiplication Table:\n" + output);
 