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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? css.activeLink : css.link
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? css.activeLink : css.link
            }
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
