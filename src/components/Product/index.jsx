import React from "react";
import Image from "../../assets/image/dress.jpg"

const Product = ({ product }) => {
  if(!product) return null;

  return (
    <div key={product.id} className="flex flex-col gap-y-2 text-sm">
      <img src={product.image || Image} alt="" className="w-full h-auto md:h-[400px]"/>
      <div className="font-bold">{product.name}</div>
      <div className="flex justify-between gap-1">
        <div>{product.type}</div>
        <div className="font-bold">
          {`${product.currency}${product.price}`}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Product);