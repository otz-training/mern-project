// function sum(...args)
// {
    // let s=0;
    // for(let i=0;i<r.length;i++)
    // {
    //      s+=r[i];
    // }
    // console.log(s);
    // console.log(args);
    // const arr=args.filter(function(e){
    //     return (typeof e ==='number') 
    // });
    // console.log(arr);
    // const res =arr.reduce(function (prev, curr) {
    //     return prev + curr;
    //   });

    // console.log(res);

   
// }
function sum(...args) {
   
    return args.filter( (e) => typeof e === 'number').reduce((prev, curr) => prev + curr);
    
   }

   function filterBy(type, ...args) {
    return args.filter(function (e) {
      return typeof e === type;
    });
  }
let r =sum(4,5);
console.log(r);
r=sum(4,'6',7,8,'9',10);
console.log(r);
r=sum("Alok","Kumar",1,3);

const res = filterBy('null',23,40,'A','B',true, null);
console.log(res);

let student ={
    name:'Alok' ,
    class1:'MCA',
    roll:100,
   
};
 function getStudent(){
    return null;
 }
// let {name,class1,roll} = student;
// console.log(name);
// console.log(class1);
// console.log(roll);

let {name:x,class1:y,roll:z} = student;
console.log(x);
console.log(y);
console.log(z);


let {name:p='',class1:q='',roll='',price=0} = getStudent() || {};
console.log(p);
console.log(q);
console.log(roll);
console.log(price);




function display({name,class1,roll})
{
    console.log(name);
    console.log(class1);
    console.log(roll);
}

display(student);