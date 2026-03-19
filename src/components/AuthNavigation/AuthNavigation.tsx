import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { LoginForm } from "../LoginForm/LoginForm";

export const AuthNavigation = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      {authContext?.isAuth ? (
        <button onClick={authContext.logout}>Logout</button>
      ) : (
        <LoginForm />
      )}
    </>
  );
};
