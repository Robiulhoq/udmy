import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
        let total = [];
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total =Number( total) + Number(product.price);
    }

    return (
        <div className='cart'>
            <h3>Odder Summary</h3>
            <h5>Items Oddered: {cart.length}</h5>
            <h4>Total Price: {Number(total)} </h4>
        </div>
    );
};

export default Cart;