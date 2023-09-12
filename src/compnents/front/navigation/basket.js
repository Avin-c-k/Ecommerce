import React from "react";

import './basket.css'

const Basket = ({ cartItems, handleAddClick, handleRemoveProduct, handleCartClear }) => {

    const totalAmount = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className="cart-items">
            <div className="cart-items-header"><h4>Cart items</h4> </div>
            <div className="clear-cart">

                {cartItems.length >= 1 && (
                    <button className="claer-btn" onClick={handleCartClear}>clear item</button>
                )}

            </div>

            {cartItems == 0 && (
                <div className="cart-item-empty">No items in cart</div>
            )}
            <div >
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-list">
                        <img src={item.image} className="cart-item-img" alt="electronic products"></img>
                        <div className="cart-item-name" >{item.name} </div>
                        <div className="cart-item-function">
                            <button className="cart-item-add" onClick={() => handleAddClick(item)}>+</button>
                            <button className="cart-item-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">{item.quantity}* ₹ {item.price}

                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-items-total-price-name">
                Total Price
                <div className="cart-items-totalPrice">
                    <h3> ₹ {totalAmount}</h3>
                </div>

            </div>

        </div>

    )
}

export default Basket