import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const LoginForm = () => {
  const authContext = useContext(AuthContext);

  const handleSubmit = (forrmData: FormData) => {
    const password = forrmData.get("password") as string;
    authContext?.login(password);
  };

  return (
    <form action={handleSubmit}>
      <input type="password" name="password" />
      <button>Login</button>
    </form>
  );
};
