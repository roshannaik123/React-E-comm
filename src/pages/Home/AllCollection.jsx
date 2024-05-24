import React, { useState } from 'react';
import "./AllCollection.css"
import Heading from './Heading';
import img1 from"./images/download.jpeg";
import img2 from"./images/download.jpeg";
import img3 from"./images/download.jpeg";
import img4 from"./images/download.jpeg";
import img5 from"./images/download.jpeg";
import img6 from"./images/download.jpeg";
import img7 from"./images/download.jpeg";
import img8 from"./images/download.jpeg";
import img9 from"./images/download.jpeg";
import img10 from"./images/download.jpeg";

function AllCollection() {
    const items = [
        { id: 1, name: 'Cotton Shirt', price: '$10', img: img1 },
        { id: 2, name: 'Cotton Shirt', price: '$10', img: img2 },
        { id: 3, name: 'Tshirt', price: '$10', img: img3 },
        { id: 4, name: 'Hoddies', price: '$10', img: img4 },
        { id: 5, name: 'Joggers', price: '$10', img: img5},
        { id: 6, name: 'Hoddies', price: '$10', img: img6},
        { id: 7, name: 'Tshirt', price: '$10', img: img7 },
        { id: 8, name: 'Shorts', price: '$10', img: img8 },
        { id: 9, name: 'Tshirt', price: '$10', img:img9 },
        { id: 10, name: 'Hoddies', price: '$10', img: img10 },
    ];

    const [showAll, setShowAll] = useState(false);

    const displayImages = showAll ? items : items.slice(0, 3);

    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <Heading>All<br />Collection<br />23-24</Heading>
            <div className='item-container'>
                {displayImages.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
<p></p>
                    </div>
                ))}
            </div>
            <button  className="btn"onClick={handleShowMore}>{showAll ? 'Show less' : 'Show more'}</button>
        </div>
    );
}

export default AllCollection;
