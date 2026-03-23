import { NavLink } from "react-router";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? css.activeLink : css.link
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? css.activeLink : css.link
            }
          >
            Add users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
