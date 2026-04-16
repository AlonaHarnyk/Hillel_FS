import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/authServices";
import {
  selectClearUser,
  selectUser,
  useAuthStore,
} from "../../stores/authStore";

export const UserMenu = () => {
  const user = useAuthStore(selectUser);
  const clearAuth = useAuthStore(selectClearUser);
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    clearAuth();
    navigate("/login");
  };

  return (
    <>
      <p>{user?.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
};
