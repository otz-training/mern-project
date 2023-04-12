const remove = function(arr, item) {
    let res = arr.filter((i)=> i !== item);
    return res;
  }

let arr=[3,4,5,6,7,8];
let item = 5;
console.log(arr);
const res = remove(arr,item);
console.log(res);
console.log(arr);


const myFish = [1,2,3,4,5,6,6,7,6,6];
const removed = myFish.forEach((e)=>{if(e == 6){myFish.splice(myFish.indexOf(e), 1)};});
console.log(myFish);

const append = function(arr, item) {
    arr.push(item);
    return arr;
 }
 console.log(arr);
append(arr,9);
console.log(arr);

const  findAllOccurrences = function(arr, target) {
    const newArr = [];
    for (const i in arr) {
        if(arr[i] == target)
        { 
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(findAllOccurrences([5,6,7,8,6], 6));
