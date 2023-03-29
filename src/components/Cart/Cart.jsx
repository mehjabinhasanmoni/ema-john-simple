import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // const cart = props.cart; // Option 1
    const {cart} = props; // Option 2

    // Calculate Total

    let totalPrice =0;
    let totalShipping = 0;
   
    for (const product of cart ){
        totalPrice = totalPrice + product.price;
        totalShipping =totalShipping + product.shipping;
      
    }

    const tax = totalPrice*7/100;

    const grandTtoal = totalPrice + totalShipping + tax ;


    


    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Total Shipping : ${totalShipping}</p>
            <p>Tax  : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTtoal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;