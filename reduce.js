let numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

/*
   The Array.prototype allows you to reduce an array to a single value using the reduce() method
*/

sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
},5);

console.log(sum);

sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(sum);