import { useEffect, useState } from "react"

const Price = ({ price, fancy }) => {
  const [integer, setInteger] = useState('0')
  const [decimal, setDecimal] = useState('00')
  useEffect(() => {
    const int = Math.floor((price + Number.EPSILON) / 100)
      .toString()

    const dec = (price % 100)
      .toString()
      .padStart(2, '0')

    setInteger(int)
    setDecimal(dec)
  }, [price, integer, decimal])

  if (!fancy) {
    return (
      <div className="max-w-max text-md font-bold">
        <span>{integer},{decimal} €</span>
      </div>
    )
  }

  // fancy
  return (
    <div className="relative max-w-max text-sm font-bold">
      <span className="text-3xl">{integer}</span>
      <span className="absolute top-0">€</span>
      <span>,{decimal}</span>
    </div>
  )
}

export default Price
