import React from 'react';
import './Cart.css'

const Cart = ({ cart, children }) => {
    // Calculate Price 
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat(total * 10 / 100);
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected Items :{quantity} </p>
            <p>Total-Price : ${total}</p>
            <p>Total-Shipping : ${shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <h5>Grand-Total : {grandTotal}</h5>
            {children}
        </div>
    );
};

export default Cart;