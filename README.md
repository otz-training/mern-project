# mern-project
Array Methods :
--------------

1. Array properties
    
     length

     Example:

        const arr =[5,4,6];
        console.log(arr.length);

Section 2. Adding / removing elements
--------------------------------------
  Stack , LIFO
  --------------
  push()
  pop()

  Queue ,FIFO
  --------------
  shift()
  unshift()

  splice() :
  ---------
  JavaScript Array type provides a very powerful splice() method that allows you to insert new elements into the middle of an array. 
  However, you can use this method to delete and replace existing elements as well.
   
  -> For Deleting Element 

     syntax:

        Array.splice(position,num_of_element);

     Example:

        const arr3 = [10,20,30,40,50];
        console.log(arr3);
        const items_deleted = arr3.splice(0,3);
        console.log(arr3);
        console.log(items_deleted);

  -> For Inserting elements

      Syntax :

         Array.splice(position,0,new_element_1,new_element_2,...);    

      Example :

         const arr5 = [20,60,70,80];
         console.log(arr5);
         arr5.splice(0,0,30,40,50);
         console.log(arr5);

   -> To Replace the elements

         let languages = ['C', 'C++', 'Java', 'JavaScript'];
         languages.splice(1, 1, 'Python');
         console.log(languages);

  slice()
  --------
  - slice() method that allows you to extract subset elements of an array and add them to the new array. 

  - The slice() method accepts two optional parameters as follows:
    
     slice(start,stop);

  - Clone an array

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

Convert array-like objects into arrays
--------------------------------------
function toArray() {
  return Array.prototype.slice.call(arguments);
}

var classification = toArray('A','B','C');

console.log(classification); // ["A", "B", "C"]


High-order methods :
-------------------

map() – transform array elements.

filter() – filter elements in an array

reduce() – reduce elements of an array to a value.

every() – check if every element in an array passes a test.

some() – check if at least one element in an array passed a test.

sort() – sort elements in an array.

forEach() – loop through array elements.


