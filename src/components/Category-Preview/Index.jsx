import Product from "../Product/Index";

import "./Styles.scss"

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
