import { memo, useState } from "react";

import { addToCart } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/store";

import { FaCheck } from "react-icons/fa";

import { IBook } from "../../interfaces/interfaces";

import styles from "./style.module.scss";

interface Props {
  book: IBook;
}

const BuyButton = memo(({ book }: Props) => {
  const dispatch = useAppDispatch();

  const [buyDone, setBuyDone] = useState<boolean>(false);

  const handleClick = (book: IBook) => {
    dispatch(addToCart(book));
    setBuyDone(true);
    setTimeout(() => setBuyDone(false), 1000);
  };

  return (
    <button
      onClick={() => handleClick(book)}
      className={`${styles.buy} ${buyDone ? styles.done : ""}`}
    >
      {!buyDone ? "Buy Now" : <FaCheck />}
    </button>
  );
});

export default BuyButton;
