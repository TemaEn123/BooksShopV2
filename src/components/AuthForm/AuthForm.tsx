import { memo, useState } from "react";

import styles from "./style.module.scss";

interface Props {
  title: string;
  handleClick: (
    email: string,
    password: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  error: boolean;
}

const AuthForm = memo(({ title, handleClick, error }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleCheck = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (pass.length < 6) {
      const pass = document.querySelector(".password");
      pass?.classList.add("error");
    } else {
      const pass = document.querySelector(".password");
      pass?.classList.remove("error");
    }
    if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/.test(email)) {
      const email = document.querySelector(".email");
      email?.classList.add("error");
    } else {
      const email = document.querySelector(".email");
      email?.classList.remove("error");
    }

    if (!document.querySelector(".error")) {
      handleClick(email, pass, e);
      setTimeout(() => {
        setEmail("");
        setPass("");
      }, 1000);
    }
  };

  return (
    <form className={styles.form}>
      <label>Email:</label>
      <input
        className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
      />
      <label>Password:</label>
      <input
        className="password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        autoComplete="off"
      />
      <div>
        <button onClick={(e) => handleCheck(e)}>{title}</button>
      </div>
      <span>
        {error && title === "Sign In"
          ? "Incorrect password or login"
          : error && title === "Sign Up"
          ? "A user with this email already exists"
          : null}
      </span>
    </form>
  );
});

export default AuthForm;
