import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total  = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // console.log(product.price)
        product.quantity = product.quantity || 1;
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
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <button className='clear-btn'>Clear Cart</button>
            <button className='review-btn'>Review Order</button>
        </div>
    );
};

export default Cart;