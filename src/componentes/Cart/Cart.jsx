import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total  = 0;
    let totalShipping = 0;
    for(const product of cart){
        console.log(product.price)
        total = total + product.price;
        totalShipping = totalShipping + product.shipping
    }

    const tax = total*7/100;

    const grandTotal = total + totalShipping + tax

    return (
        <div className='summary-container'>
            <h1>Order summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
            <button className='clear-btn'>Clear Cart</button>
            <button className='review-btn'>Review Order</button>
        </div>
    );
};

export default Cart;