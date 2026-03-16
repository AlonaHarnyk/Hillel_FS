import { Outlet, useLocation } from "react-router";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        {!location.pathname.includes("details") && <Navigation />}
      </header>
      <main>{<Outlet />}</main>
      <footer>Footer</footer>
    </>
  );
};
