import { useEffect, useState } from "react"
import Price from "./Price"
import CartItem from "./CartItem"

const Cart = ({ onEvent, cart }) => {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const total = cart.reduce((sum, cartItem) => {
      return sum + cartItem.total
    }, 0)
    setTotal(total)
  }, [cart])

  return (
    <div className="flex flex-col items-center">
      <h2 className="p-2 text-center text-xl">Cart</h2>
      <Price price={total} inline />
      <div className="pt-2 flex flex-col gap-4">
        {cart.map((cartItem) =>
          <CartItem key={cartItem.shopItem.id} onEvent={onEvent} cartItem={cartItem} />
        )}
      </div>
    </div>
  )
}

export default Cart
