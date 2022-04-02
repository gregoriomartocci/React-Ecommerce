import React from "react";
import "./Styles.scss";
import Product from "../../Components/Product/Index";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/Products";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
