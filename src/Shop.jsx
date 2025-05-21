import ShopItem from "./ShopItem"

const Shop = ({ onEvent, onFilter, categories, shop, cart }) => {
  const handleClick = (id) => {
    return () => {
      onFilter(id)
    }
  }

  const ci = (shopItem) => {
    const cartItem = cart.find((cartItem) => cartItem.shopItem.id === shopItem.id)
    return {
      shopItem: shopItem,
      quantity: cartItem?.quantity,
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="p-2 text-center text-xl">Shop</h2>
      <div className="pb-4 flex flex-row gap-x-2 text-white">
        {categories.map((category) =>
          <button key={category.id} onClick={handleClick(category.id)}
            className={category.filtered ?
              'px-2 hover:cursor-pointer border border-blue-800 text-blue-800 rounded-full' :
              'px-2 hover:cursor-pointer border border-blue-800 bg-blue-800 rounded-full'
            }
          >
            {category.name.toUpperCase()}
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {shop.map((shopItem) =>
          <ShopItem key={shopItem.id} onEvent={onEvent} shopItem={shopItem} cartItem={ci(shopItem)} />
        )}
      </div>
    </div>
  )
}

export default Shop
