import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products'

export const ShopContext = createContext(null)

const getDefaultItem = () => {
    let cart = {}
    for(let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultItem())

    const getSutTotal = () => {
        let totalAmount = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                const itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItems = (totalCount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: totalCount }))
    }

    const cartValues = {addToCart, removeFromCart, cartItems, updateCartItems, getSutTotal}

  return (
    <ShopContext.Provider value={cartValues}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
