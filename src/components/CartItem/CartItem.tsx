import { memo } from "react";

import { Link } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import { addToCart, deleteFromCart } from "../../redux/slices/cartSlice";

import { IBookWithCountAndPrice } from "../../interfaces/interfaces";

import styles from "./style.module.scss";

interface Props {
  book: IBookWithCountAndPrice;
}

const CartItem = memo(({ book }: Props) => {
  const dispatch = useAppDispatch();

  const handleIncreaseClick = () => {
    dispatch(addToCart(book));
  };

  const handleDecreaseClick = () => {
    dispatch(deleteFromCart(book.id));
  };

  return (
    <div className={styles.cartItem}>
      <Link to={`./shop/${book.id}`} className={styles.cartItem__img}>
        <img src={book.image} alt={book.title} />
      </Link>
      <div className={styles.cartItem__details}>
        <Link to={`./shop/${book.id}`}>
          <h4>{book.title}</h4>
        </Link>

        <div className={styles.cartItem__count}>
          <button className="cart-icon" onClick={handleIncreaseClick}>
            +
          </button>
          count: <span>{book.count}</span>
          <button className="cart-icon" onClick={handleDecreaseClick}>
            -
          </button>
        </div>
        <div className={styles.cartItem__price}>
          price: <span>{book.price * book.count}$</span>
        </div>
      </div>
    </div>
  );
});

export default CartItem;
