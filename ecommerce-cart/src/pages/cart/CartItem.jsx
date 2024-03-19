import React, {useContext} from 'react'
import { ShopContext } from '../../constext/ShopContext'


const CartItem = ({data}) => {
    const { id, productName, productImage, price } = data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <div className="cartItem-img">
        <img src={productImage} />
      </div>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p> ${price} </p>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
