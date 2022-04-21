import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart.items);
  console.log(cartInfo);
  const { title, quantity, totalPrice, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartAction.addItemToCart(props.item));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
