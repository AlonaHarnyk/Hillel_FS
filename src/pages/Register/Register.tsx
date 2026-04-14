import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authServices";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { selectSetuser, useAuthStore } from "../../stores/authStore";
import type { AuthData } from "../../types/auth";

export const Register = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore(selectSetuser);

  const register = async (authData: AuthData) => {
    const user = await registerUser(authData);
    setUser(user);
    navigate("/contacts");
  };

  return (
    <>
      <h1>Register</h1>
      <AuthForm onSubmit={register} />
    </>
  );
};
