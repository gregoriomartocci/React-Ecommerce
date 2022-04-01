import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { CartContext } from "../../Contexts/Cart/Index";
import { UserContext } from "../../Contexts/User/Index";
import { signOutUser } from "../../Utils/Firebase/Index";
import CartDropdown from "../Cart-Dropdown/Index";
import CartIcon from "../Cart-Icon/Index";

import "./Styles.scss";




const Navigation = () => {
  const { cartItems, isCartOpen, cartCount } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="navigation-logo">Logo</CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon quantity={cartCount}/>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
