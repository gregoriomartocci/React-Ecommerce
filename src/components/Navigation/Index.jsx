import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div> I'm the Navigation</div> <Outlet />
    </div>
  );
};

export default Navigation;
