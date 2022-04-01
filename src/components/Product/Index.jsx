import "./Styles.scss";
import Button from "../Button/Index";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart/Index";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-body">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
