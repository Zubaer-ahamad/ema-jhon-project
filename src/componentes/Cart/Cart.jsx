import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total  = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // console.log(product.price)
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = total * 0.1;

    const grandTotal = total + totalShipping + tax

    return (
        <div className='summary-container'>
            <h1>Order summary</h1>
            {/* <p>Selected Items: {cart.length}</p> */}
            <h3>Selected Items: {quantity}</h3>
            <h3>Total Price: ${total}</h3>
            <h3>Total Shipping Charge: ${totalShipping}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <button className='clear-btn'>Clear Cart</button>
            <button className='review-btn'>Review Order</button>
        </div>
    );
};

export default Cart;