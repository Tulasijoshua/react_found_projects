import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'

const CartItem = ({data}) => {
    const {id, productName, price, productImage} = data
    const {cartItems, addToCart, removeFromCart, updateCartItems} = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <div className="cartItem-img">
        <img src={productImage} />
      </div>
      <div className="description">
        <p><b>{productName} </b></p>
        <p><b>${price} </b></p>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value), id)} />
            <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
