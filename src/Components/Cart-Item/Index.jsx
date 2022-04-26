import "./Styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="cart-item-details">
        <h3 className="cart-item-name"> {name}</h3>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
