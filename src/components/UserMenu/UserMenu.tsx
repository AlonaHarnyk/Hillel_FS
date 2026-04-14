import { logoutUser } from "../../api/authServices";
import { selectUser, useAuthStore } from "../../stores/authStore";

export const UserMenu = () => {
  const user = useAuthStore(selectUser);

  const logout = () => {
    logoutUser();
  };

  return (
    <>
      <p>{user?.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
};
