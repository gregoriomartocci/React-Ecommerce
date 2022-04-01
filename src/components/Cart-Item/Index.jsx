import "./Styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="cart-item-details">
        <h2 className="cart-item-name"> {name}</h2>
        <span className="cart-item-quantity">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
