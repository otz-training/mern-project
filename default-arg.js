function sum(x=0,y=0)
{
   console.log("x="+x);
   console.log("y="+y);
   return x+y;
}

let res = sum();
console.log(res);

 res = sum(12);
console.log(res);
 res = sum(12,90);
console.log(res);