import React, { useContext } from 'react'
import './cart.css'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../constext/ShopContext'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {
            PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }
            })
        }
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  )
}

export default Cart
