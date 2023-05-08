import { useState } from "react";


function Book(props) {
  const [book,setBook] = useState(props);
  const defaultItem = {
    name :"Javascript",
    author:"JP Singh",
    price : 500,
    img : 'https://rukminim1.flixcart.com/image/416/416/xif0q/book/u/t/p/javascript-for-beginners-original-imagjvyg7xbwypeq.jpeg?q=70'
  };
  console.log(Object.keys(book).length);
  if(Object.keys(book).length === 0){
      setBook(defaultItem);
      
  }
  
    
 
  return (
    <>
        <div>
            <h1>Book Name : {book.name}</h1>
            <h1>Book Author : {book.author}</h1>
            <h1>Book Price : {book.price}</h1>
            <img src={book.img} alt=""/>
        </div>
    </>
  );
}

export default Book;