import { useEffect } from "react";
import {
  DEACREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  TOTAL,
} from "../context/actions";
import { useGlobalContext } from "../context/context";

export const CartItem = ({ title, price, id, img, quantity }) => {
  const { state, dispatch } = useGlobalContext();

  const getTotal = () => {
    dispatch({ type: TOTAL, payload: price });
  };

  useEffect(() => {
    getTotal();
  }, [price, quantity]);

  const handleRemoveItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const handleIncreaseQuantity = (id, quantity) => {
    console.log(id);
    dispatch({
      type: INCREASE_QUANTITY,
      payload: {
        id,
        quantity,
      },
    });
  };

  const handleDecreaseQuantity = (id, quantity) => {
    console.log(id);
    dispatch({
      type: DEACREASE_QUANTITY,
      payload: {
        id,
        quantity,
      },
    });
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div style={{ textAlign: "start" }}>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => handleRemoveItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => handleIncreaseQuantity(id, quantity)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
          </svg>
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => handleDecreaseQuantity(id, quantity)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </button>
      </div>
    </article>
  );
};
