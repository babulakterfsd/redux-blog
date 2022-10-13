import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import Total from './Total';

function Cart() {
    const { cart, products } = useSelector((state) => state);

    const totalSelectedProduct = cart.reduce((prev, current) => prev + current.quantity, 0);
    const totalPrice = cart.reduce((prev, current) => prev + current.price * current.quantity, 0);

    return (
        <div className="w-96">
            {cart?.length > 0 &&
                cart.map((cartProduct) => (
                    <CartItems key={cartProduct.id} products={products} cartProduct={cartProduct} />
                ))}

            <Total title="Selected Product" amount={totalSelectedProduct} />
            <Total title="Total Price" amount={totalPrice} />
        </div>
    );
}

export default Cart;
