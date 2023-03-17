let numbers = [1, 3, 5,0];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result);



result = numbers.every(function (e) {
    return e > 0;
});

console.log(result);