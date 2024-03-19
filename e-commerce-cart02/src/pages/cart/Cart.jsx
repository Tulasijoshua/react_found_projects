import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {cartItems, getSutTotal} = useContext(ShopContext)
    const totalAmount = getSutTotal()
    const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cartTitle">
        <h2>Your cart items</h2>
      </div>
      <div className="cartItems">
        {
            PRODUCTS.map((item) => {
                if(cartItems[item.id] > 0) {
                    return( <CartItem key={item.id} data={item} /> )
                }
            })
        }
      </div>
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
