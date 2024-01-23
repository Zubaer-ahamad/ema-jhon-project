import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='order-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className='summary-container'>
                <h1>Order summary</h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <h2>Grand Total:</h2>
                <button className='clear-btn'>Clear Cart</button>
                <button className='review-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Products;