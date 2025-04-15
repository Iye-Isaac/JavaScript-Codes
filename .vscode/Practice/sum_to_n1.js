function sum_to_n1(n) {
    let sum = 0;
    let steps = "";
    for (let i = 1; i <= n; i++) {
        sum += i;

        steps += i;

        if (i< n){
            steps += "+";
        }
    }

    return `${steps} = ${sum}`;
}

const output = sum_to_n1(5);
console.log(output);