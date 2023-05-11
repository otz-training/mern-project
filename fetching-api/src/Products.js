import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
const Products = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
      // fetch('https://dummyjson.com/products')
      //   .then(response => response.json())
      //   .then(json => setData(json.products))
      //   .catch(error => console.error(error));
      
      axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log(response.data);
        setData(response.data.products);
      })
      .catch(error => {
        console.error(error);
      });
    }, []);
  
    return (
      <div class="row">
        {data && data.length > 0 && data.map((product) => (
               <Product data={product}/>
          ))}
      </div>
    );
}

export default Products;