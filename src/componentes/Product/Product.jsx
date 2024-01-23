import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {img, name, price, seller, ratings} = props.product;
    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='specification'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='add-btn'>
                Add To Craft <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;