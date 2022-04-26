import "./Styles.jsx";
import { CartContext } from "../../Contexts/Cart/Index";
import { useContext } from "react";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./Styles.jsx";

const CartIcon = ({ quantity }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
