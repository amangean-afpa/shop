import CartQuantity from "./CartQuantity"
import Price from "./Price"

const CartItem = ({ onEvent, cartItem }) => {
  return (
    <div className="max-w-max p-4 flex flex-row gap-2 border-2 border-neutral-200 rounded-lg">
      <img className="size-18" src={cartItem.shopItem.image} alt={cartItem.shopItem.name} />
      <div className="w-50">
        <p className="text-sm font-bold">
          {cartItem.shopItem.name}
        </p>
       <div className="pt-2 flex flex-row items-center justify-between gap-x-4">
          <CartQuantity onEvent={onEvent} cartItem={cartItem} />
          <Price price={cartItem.total} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
