import { Outlet, useLocation } from "react-router";
import { Navigation } from "../Navigation/Navigation";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { AuthNavigation } from "../AuthNavigation/AuthNavigation";
import { Section } from "../Section/Section";
import { selectLang, useLangStore } from "../../stores/langStore";

export const Layout = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  // const { changeLang, lang } = useLangStore();

  const lang = useLangStore(selectLang);
  const changeLang = useLangStore((state) => state.changeLang);

  const changeLangHandler = (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    changeLang(e.target.value);
  };

  return (
    <>
      <AuthNavigation />
      {authContext?.isAuth ? (
        <>
          <header>
            <select value={lang} onChange={changeLangHandler}>
              <option value="en">EN</option>
              <option value="uk">UK</option>
              <option value="pl">PL</option>
            </select>
            {!location.pathname.includes("details") && <Navigation />}
          </header>
          <main>
            <Section title="Navigation">
              <p>Test</p>
            </Section>
            <Outlet />
          </main>
          <footer>Footer</footer>
        </>
      ) : (
        <p>Login, please</p>
      )}
    </>
  );
};
