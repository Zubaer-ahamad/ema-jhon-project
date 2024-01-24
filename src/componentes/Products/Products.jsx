import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect( () => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step-1: Get Id
        for(const id in storedCart){
        // Step-2: Get The Product Using ID
        const addedProduct = products.find(product => product.id === id);
        // console.log(addedProduct);
        if(addedProduct){
            //step-3 Add Quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // Step-4 Add the product save cart
            saveCart.push(addedProduct);
        }
        // step-5 Set The Cart 
        setCart(saveCart);
    }
    } , [products])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;