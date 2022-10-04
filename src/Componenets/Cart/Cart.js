import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const totalPrice = total + shipping + tax;
    return (
        <div>
            <h1>Order Summery</h1>
            <h4>Selected Items : {cart.length}</h4>
            <h4>Price: ${total} </h4>
            <h4>Total Shipping : ${shipping}</h4>
            <h4>Total Tax : ${tax.toFixed(2)}</h4>
            <h3 className='total-price'>Total Price : ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;