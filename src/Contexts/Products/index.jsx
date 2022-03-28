import { createContext, useState } from "react";
import Products from "../../Views/Shop/Mock/Products";

export const ProductsContext = createContext({
  products: [],
  //   setProducts
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
