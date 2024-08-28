import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useAppDispatch } from "../../redux/store";
import { setUser } from "../../redux/slices/userSlice";

import AuthForm from "../AuthForm/AuthForm";

const Login = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);

  const handleLogin = (
    email: string,
    password: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const auth = getAuth();
    (async () => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const token = await user.getIdToken();

        dispatch(
          setUser({
            email: user.email!,
            id: user.uid,
            token,
          })
        );

        if (error) {
          setError(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
    })();
  };

  return <AuthForm title="Sign In" handleClick={handleLogin} error={error} />;
};

export default Login;
