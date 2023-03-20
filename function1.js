// function sum(n1 ,n2)
// {
//     let r = n1+n2;
//     return r;
// }
// function say()
// {
//     console.log("Hello!!");
//     return "Hi";
// }


// console.log(say());
// console.log(sum(50,20));
// console.log(sum(10,20));
// console.log(sum(40,50));

function sum(){
    // console.log("Number of argumaent passed:"+arguments.length);
    // console.log("Number of argumaent passed:"+arguments[0]);
    // console.log("Number of argumaent passed:"+arguments[1]);
    // console.log("Number of argumaent passed:"+arguments[2]);
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}

sum();
sum(12);
let res = sum(12,10,30,70);

console.log(res);

let add = sum;

console.log(add(10,20));
console.log(typeof sum);
console.log(typeof add);




function sub(x,y)
{
    return x-y;
}
function mul(x,y)
{
    return x*y;
}

let p=90;
let q=80;
let fun;
let ch=1;
switch(ch)
{
  case 1:
    fun=add;
    break;
  case 2:
    fun=sub;
    break;
  case 2:
    fun=mul;
   break;
}
fun(p,q);

function average(a, b, fn) {
    return fn(a, b) / 2;
}
console.log(average(12,6,add));