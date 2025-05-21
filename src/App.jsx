import { useEffect, useState } from "react"
import Shop from "./Shop"
import Cart from "./Cart"

const App = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/categories.json')
        const categories = await resp.json()
        setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const [shop, setShop] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/products.json')
        const shop = await resp.json()
        setShop(shop)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const [filteredShop, setFilteredShop] = useState([])
  useEffect(() => {
    const filteredShop = shop.filter((shopItem) => {
      const category = categories.find((category) => category.id === shopItem.category.id)
      return !category.filtered
    })
    setFilteredShop(filteredShop)
  }, [categories, shop])

  const filter = (id) => {
    setCategories(categories.map((category) => {
      if (category.id != id) return category
      return {
        id: category.id,
        name: category.name,
        filtered: !category.filtered
      }
    }))
  }

  const [cart, setCart] = useState([])
  const handleEvent = (event, id) => {
    const shopItem = shop.find((shopItem) => shopItem.id === id)
    const cartItem = cart.find((cartItem) => cartItem.shopItem?.id === id)
    if (cartItem === undefined) {
      // add to cart
      setCart([...cart, {
        shopItem: shopItem,
        quantity: 1,
        total: shopItem.price,
      }])
      return
    }

    const delta = event == '+' ? +1 : -1
    const quantity = cartItem.quantity + delta
    if (quantity === 0) {
      // remove from cart
      setCart(cart.filter((cartItem) => cartItem.shopItem.id !== id))
      return
    }

    // increment/decrement quantity
    setCart(cart.map((cartItem) => {
      if (cartItem.shopItem.id !== id) return cartItem
      return {
        shopItem: cartItem.shopItem,
        quantity: quantity,
        total: cartItem.shopItem.price * quantity,
      }
    }))
  }

  return (
    <div className="p-8 flex flex-row">
      <div className="flex-3">
        <Shop onEvent={handleEvent} onFilter={filter} categories={categories} shop={filteredShop} cart={cart} />
      </div>
      <div className="flex-1">
        <Cart onEvent={handleEvent} cart={cart} />
      </div>
    </div>
  )
}

export default App
