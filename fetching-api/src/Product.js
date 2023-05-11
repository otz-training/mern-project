import React from 'react';

const Product = ({data}) =>{
    console.log(data);
   return(
     
         <div class="col-md-3">
         <div class="card">
                <img className="card-img-top img-fluid" src={data.thumbnail} />
                <div className="card-body">
                    <h5 class="card-title">{data.id}-{data.title}</h5>
                    <p class="card-text">{data.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price :{data.price}</li>
                    <li class="list-group-item">Discount:{data.discountPercentage}%</li>
                    <li class="list-group-item">Rating : {data.rating}</li>
                    <li class="list-group-item">{data.stock}</li>
                    <li class="list-group-item">{data.brand}</li>
                    <li class="list-group-item">{data.category}</li>
                    <li class="list-group-item">{data.thumbnail}</li>
                    <ol>
                        {data.images.map((img) => (
                             <li>{img}</li>
                        ))}
                    </ol>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        
         </div>
     
    );
}

export default Product;