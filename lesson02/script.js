let num = 266219;
let arr = num.toString().split('');
let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
  sum += arr[i] * arr[i + 1];
}

let result = sum ** 3;


console.log(result);
console.log(result.toString().slice(0 ,2));