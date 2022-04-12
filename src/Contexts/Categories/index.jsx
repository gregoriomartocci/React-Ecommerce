import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../Utils/Firebase/Index";

export const CategoriesContext = createContext({
  categoriesMap: {},
  //   setProducts
});

export const CategoriesProvider = ({ children }) => {

  const [categoriesMap, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap)
    };
    getCategoriesMap()
  },[]);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
