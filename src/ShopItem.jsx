import Price from "./Price";
import CartQuantity from "./CartQuantity";

const ShopItem = ({ onEvent, shopItem, cartItem }) => {
  return (
    <div className="max-w-max p-4 flex flex-col gap-2 border-2 border-neutral-200 rounded-lg">
      <img className="size-44" src={shopItem.image} alt={shopItem.name} />
      <div>
        <div className="flex flex-row items-center justify-between gap-x-4">
          <Price price={shopItem.price} fancy />
          <CartQuantity onEvent={onEvent} cartItem={cartItem} />
        </div>
        <p className="pt-2 text-sm font-bold">
          {shopItem.name}
        </p>
      </div>
    </div>
  )
}

export default ShopItem