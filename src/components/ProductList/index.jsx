import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product";

const ProductList = () => {
  const products = useSelector((state) => state.main.products);

  console.log(products);

  return (
    <div className="grid  grid-cols-2 lg:grid-cols-4 gap-3 py-4">
      {
        products?.map((product) => (
          <Product product={product} />
        ))
      }
    </div>
  )
}

export default React.memo(ProductList);