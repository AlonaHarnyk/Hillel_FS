import { NavLink } from "react-router-dom";
import { selectIsAuth, useAuthStore } from "../../stores/authStore";

export const MainNavigation = () => {
  const isAuth = useAuthStore(selectIsAuth);
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isAuth && (
        <>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};
