import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Index";
import Home from "./Views/Home/Index";
import Authentication from "./Views/Authentication/Index";
import Shop from "./Views/Shop/Index";
import Checkout from "./Views/Checkout/Index";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./Utils/Firebase/Index";
import { setCurrentUser } from "./Store/Slices/Users/Index";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsuscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
