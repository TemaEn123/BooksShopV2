import { useState } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { useAppDispatch } from "../../redux/store";
import { setUser } from "../../redux/slices/userSlice";

import AuthForm from "../AuthForm/AuthForm";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);

  const handleRegister = (
    email: string,
    password: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth = getAuth();
    (async () => {
      try {
        const { user } = await createUserWithEmailAndPassword(
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

  return (
    <AuthForm title="Sign Up" handleClick={handleRegister} error={error} />
  );
};

export default SignUp;
