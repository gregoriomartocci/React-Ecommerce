import "./Styles.scss";
import Button from "../Button/Index";
import CartItem from "../Cart-Item/Index";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart/Index";

import "./Styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button> GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
