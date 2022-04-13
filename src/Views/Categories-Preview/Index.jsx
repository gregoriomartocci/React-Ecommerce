import React from "react";
import "./Styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories";
import CategoryPreview from "../../Components/Category-Preview/Index";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
