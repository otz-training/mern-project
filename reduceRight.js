let numbers = [1, 2, 3];

let sum = numbers.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});

console.log(`Result:${sum}`);

console.log(`2 + 4 is equals to ${2+4}`);