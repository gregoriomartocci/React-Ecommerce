import React from "react";
import "./Styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories";
import CategoryPreview from "../../Components/Category-Preview/Index";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);

  console.log(categoriesMap, "CATEGORIES")

  return (
    <>
      {categoriesMap ? (
        <div className="category-preview-container">
          {Object?.keys(categoriesMap)?.map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })}
        </div>
      ) : {} ?? {} }
    </>
  );
};

export default CategoriesPreview;
