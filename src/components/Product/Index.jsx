import "./Styles.scss";
import Button from "../Button/Index";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-body">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
  
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default Product;
