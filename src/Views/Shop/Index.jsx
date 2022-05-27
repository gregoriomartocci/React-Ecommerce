import { Routes, Route } from "react-router-dom";
import "./Styles.scss";
import CategoriesPreview from "../Categories-Preview/Index";
import Category from "../Category/Index";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/Index";
import { setCategoriesMap } from "../../Store/Slices/Categories/Index";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
