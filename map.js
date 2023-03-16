const arr = [5,6,7];
console.log(arr);
/*
const arr1=[];
for(let i=0;i<arr.length;i++)
{
   arr1[i] = arr[i] * arr[i];
}
console.log(arr1);
*/

/*
function sqr(e){
    return e*e;
}
const arr1= arr.map(sqr);
console.log(arr1);
*/
/* 
const arr1= arr.map(function (e){
    return e*e;
});
console.log(arr1);
*/
const arr1= arr.map(e => e*e);
console.log(arr1);


const arr2= arr.map(e => Math.sqrt(e));
console.log(arr2);


