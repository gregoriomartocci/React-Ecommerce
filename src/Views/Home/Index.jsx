import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../Components/Categories/Index";

const Home = () => {
  return (
    <Fragment>
      <Categories />
      <Outlet />
    </Fragment>
  );
};

export default Home;
