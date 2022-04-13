import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Contexts/Categories";
import { Fragment, useContext, useEffect, useState } from "react";
import Product from "../../Components/Product/Index";
import "./Styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([categoriesMap[category]]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
