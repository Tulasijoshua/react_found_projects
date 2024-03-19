import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../context/ShopContext'

const Product = ({data}) => {
  const {id, productName, price, productImage} = data
  const {addToCart, cartItems} = useContext(ShopContext)
  const totalCount = cartItems[id]
  return (
    <div className='product'>
      <div className="product-img">
        <img src={productImage} />
      </div>
      <div className="desc">
        <div className="description">
          <p><b>Product: {productName}</b></p>
          <p><b>Price: ${price}</b></p>
        </div>
        <button className='addToCart'
        onClick={() => addToCart(id)}>Add to cart {totalCount > 0 && <>({totalCount}) </> }
        </button>
      </div>
    </div>
  )
}

export default Product
