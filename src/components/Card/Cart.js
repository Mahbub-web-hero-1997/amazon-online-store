import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // Calculate Price 
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat(total * 10 / 100);
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected Items :{cart.length} </p>
            <p>Total-Price : ${total}</p>
            <p>Total-Shipping : ${shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <h5>Grand-Total : {grandTotal}</h5>
        </div>
    );
};

export default Cart;