import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { productName, imageUrl, price, quantity } = product;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearProductHandler = () => clearItemFromCart(product);
  const addProductHandler = () => addItemToCart(product);
  const removeProductHandler = () => removeItemFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${productName}`} />
      </div>
      <span className="name">{productName}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeProductHandler}>
          -
        </div>
        <span className="value">{quantity}</span>{" "}
        <div className="arrow" onClick={addProductHandler}>
          +
        </div>
      </span>
      <span className="price">€{price}</span>
      <div className="remove-button" onClick={clearProductHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
