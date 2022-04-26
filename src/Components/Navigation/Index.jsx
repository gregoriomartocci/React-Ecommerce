import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { CartContext } from "../../Contexts/Cart/Index";
import { UserContext } from "../../Contexts/User/Index";
import { signOutUser } from "../../Utils/Firebase/Index";
import CartDropdown from "../Cart-Dropdown/Index";
import CartIcon from "../Cart-Icon/Index";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./Styles";

const Navigation = () => {
  const { isCartOpen, cartCount } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <NavigationContainer>
          <LogoContainer to="/">
            <CrownLogo className="navigation-logo">Logo</CrownLogo>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">
                SIGN IN
              </NavLink>
            )}
            <CartIcon quantity={cartCount} />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
