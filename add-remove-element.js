const arr =[1,2,3,4,5,6];
console.log(arr);

arr.push(10);
arr.push(20);
console.log(arr);

let e1 = arr.pop();
console.log("e1="+e1);

const arr1 =['A','B'];
console.log(arr1);

arr1.unshift('C');
console.log(arr1);

let e2 = arr1.shift();
console.log(e2);


const arr3 = [10,20,30,40,50];
console.log(arr3);
const items_deleted = arr3.splice(0,3);
console.log(arr3);
console.log(items_deleted);


const arr5 = [20,60,70,80];
console.log(arr5);
arr5.splice(1,0,30,40,50);
console.log(arr5);

arr5.splice(1,2,300,400,500);
console.log(arr5);

let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages);

var numbers = [1,2,3,4,5];
console.log(numbers);
var newNumbers = numbers.slice();
console.log(numbers);

var fruits = ['Apple','Orange','Mango','PineApple'];
console.log(fruits);
var myFruits = fruits.slice();
console.log(myFruits);

var myFavFruits = fruits.slice(2);
console.log(myFavFruits);



var yellowFruits = fruits.slice(1,3); //Excludes end Index
console.log(yellowFruits);

var yellowFruits = fruits.slice(-1,3); //Excludes end Index
console.log(yellowFruits);
