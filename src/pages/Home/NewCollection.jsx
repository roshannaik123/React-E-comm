import React from 'react';
import Heading from './Heading';
import './Heading.css'; 
import img1 from "./images/Group 65.png";
import img2 from "./images/Group 66.png";
import img3 from "./images/Rectangle 13.png";
import img4 from "./images/Rectangle 18.png";

const products = [
    { id: 1, name: 'Product Name 1', price: '$100', image: img1 },
    { id: 2, name: 'Product Name 2', price: '$150', image: img2 },
    { id: 3, name: 'Product Name 3', price: '$200', image: img3 },
    { id: 4, name: 'Product Name 4', price: '$250', image: img4 }
];

const NewCollection = () => {
    return (
        <div className='collections'>
            <Heading>New<br />These Week</Heading>
            <div className='home_new_collection'>
                {products.map(product => (
                   
     <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewCollection;
