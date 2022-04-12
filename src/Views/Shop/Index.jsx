import React, { Fragment } from "react";
import "./Styles.scss";
import Product from "../../Components/Product/Index";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories";
import CategoryPreview from "../../Components/Category-Preview/Index";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log("categoriesMap", categoriesMap);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        console.log(title)
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
