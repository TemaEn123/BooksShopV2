import { Dispatch, SetStateAction, memo, useEffect } from "react";

import useAuth from "../../helpers/hooks/useAuth";

import { useAppDispatch } from "../../redux/store";
import { removeUser } from "../../redux/slices/userSlice";

import avatar from "../../img/User";

import styles from "./style.module.scss";

interface Props {
  showUser: boolean;
  setShowUser: Dispatch<SetStateAction<boolean>>;
}

const User = memo(({ showUser, setShowUser }: Props) => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      setShowUser(false);
    }
  }, [isAuth]);

  document.addEventListener("click", (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).closest(".user") &&
      !(e.target as HTMLElement).closest(".user-icon") &&
      showUser
    ) {
      setShowUser(false);
    }
  });

  const handleExitClick = () => {
    dispatch(removeUser());
  };

  return (
    <div className={`${styles.user} ${showUser ? styles.show : ""} user`}>
      <div className={styles.user__img}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.user__info}>
        <span>{email}</span>
        <button onClick={handleExitClick}>exit</button>
      </div>
    </div>
  );
});

export default User;
