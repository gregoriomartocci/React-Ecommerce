import "./Styles.scss";
import Button from "../Button/Index";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />

      <Button> GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
