import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Index";
import Home from "./Views/Home/Index";
import Authentication from "./Views/Authentication/Index";
import Shop from "./Views/Shop/Index";
import Checkout from "./Views/Checkout/Index";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
