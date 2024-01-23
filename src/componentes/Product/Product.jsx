import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='specification'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button className='add-btn'>Add To Craft</button>
        </div>
    );
};

export default Product;