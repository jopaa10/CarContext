import { CLEAR_CART } from "../context/actions";
import { useGlobalContext } from "../context/context";

export const Footer = ({ total }) => {
  const { dispatch } = useGlobalContext();

  const handleClearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          total
          <span>${total}</span>
        </h4>
      </div>
      <button className="btn clear-btn" onClick={() => handleClearCart()}>
        clear cart
      </button>
    </footer>
  );
};
