import { Routes, Route } from "react-router-dom";
import "./Styles.scss";
import CategoriesPreview from "../Categories-Preview/Index";
import Category from "../Category/Index";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
