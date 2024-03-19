import React from 'react'
import './shop.css'
import { PRODUCTS } from '../../Products'
import Product from './Product'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Tulasi Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
        <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
