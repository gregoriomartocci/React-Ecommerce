import React from "react";
import Category from "../Category/Index";
import "./Styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default Categories;
