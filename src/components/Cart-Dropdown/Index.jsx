import "./Styles.jsx";
import Button from "../Button/Index";
import CartItem from "../Cart-Item/Index";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart/Index";

import "./Styles.jsx";
import { useNavigate } from "react-router-dom";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./Styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
