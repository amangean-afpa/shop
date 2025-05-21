import { Minus, Plus } from "lucide-react"

const CartQuantity = ({ onEvent, cartItem }) => {
  const handleClick = (event) => {
    return () => {
      onEvent(event, cartItem.shopItem.id)
    }
  }

  if (cartItem?.quantity === undefined) {
    return (
      <div className="max-w-max h-8 grid grid-cols-3 text-white text-xl">
        <div className="col-span-2"></div>
        <button className="max-w-10 px-1 hover:cursor-pointer bg-blue-800 rounded-full"
          onClick={handleClick('+')}
        >
          <Plus />
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-max h-8 grid grid-cols-3 text-white text-xl">
      <button className="max-w-10 px-1 hover:cursor-pointer bg-blue-800 rounded-l-full"
        onClick={handleClick('-')}
      >
        <Minus />
      </button>

      <div className="flex justify-center items-center bg-blue-800 text-base text-center">
          {cartItem.quantity}
      </div>

      <button className="max-w-10 px-1 hover:cursor-pointer bg-blue-800 rounded-r-full"
        onClick={handleClick('+')}
      >
        <Plus />
      </button>
    </div>
  )
}

export default CartQuantity
