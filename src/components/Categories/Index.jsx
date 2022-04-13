import React from "react";
import Category from "../Directory/Index";
import "./Styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default Categories;
