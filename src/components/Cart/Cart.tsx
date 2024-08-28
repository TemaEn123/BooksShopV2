import { memo } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { clearCart, selectCart } from "../../redux/slices/cartSlice";

import CartItem from "../CartItem/CartItem";

import { getTotalPrice } from "../../helpers/functions/getTotalPrice";

import styles from "./style.module.scss";

interface Props {
  showCart: boolean;
}

const Cart = memo(({ showCart }: Props) => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectCart);

  const handleClearClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className={`${styles.cart} ${showCart ? styles.show : ""} cart`}>
      {!cart.length ? (
        <span>Cart is Empty</span>
      ) : (
        <>
          {cart.map((book) => (
            <CartItem key={book.id} book={book} />
          ))}
          <div className={styles.cart__total}>
            TOTAL PRICE: <span>{getTotalPrice(cart)}$</span>
          </div>
          <div className={styles.cart__clear}>
            <button onClick={handleClearClick} className="cart-icon">
              CLEAR CART
            </button>
          </div>
        </>
      )}
    </div>
  );
});

export default Cart;
