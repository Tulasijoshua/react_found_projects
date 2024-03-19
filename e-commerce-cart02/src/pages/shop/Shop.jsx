import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../Products'
import Product from './Product'

const Shop = () => {
  const [data, setData] = useState([])
  const [collection, setCollection] = useState([])

  useEffect(() => {
    setData(PRODUCTS)
    setCollection([... new Set(PRODUCTS.map((item) => item.productName))])
  }, [])

  const getResults = (itemName) => {
    const results = PRODUCTS.filter((item) => item.productName === itemName)
    setData(results)
  }

  return (
    <div className='shopWrapper'>
      <div className="productName">
        <ul>
          <li><button onClick={() => setData(PRODUCTS)}>All</button></li>
          {
            collection.map((item, index) => (
              <li key={index}><button onClick={() => getResults(item)}>{item}</button></li>
            ))
          }
        </ul>
      </div>
      <div className="products">
        {
          data.map((item) => (
            <Product key={item.id} data={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Shop
