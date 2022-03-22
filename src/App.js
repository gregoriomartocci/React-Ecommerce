import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Index";
import Shop from "./Components/Shop/Index";
import Home from "./Views/Home/Index";
import SingIn from "./Components/Sign-In/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
