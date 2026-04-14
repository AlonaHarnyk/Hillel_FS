import { Outlet } from "react-router-dom";
import { AuthNavigation } from "../AuthNavigation/AuthNavigation";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { UserMenu } from "../UserMenu/UserMenu";
import {
  selectIsAuth,
  selectIsFetching,
  useAuthStore,
} from "../../stores/authStore";

export const Layout = () => {
  const isAuth = useAuthStore(selectIsAuth);
  const isFetching = useAuthStore(selectIsFetching);

  return (
    <>
      <header>
        <MainNavigation />
        {!isFetching && (isAuth ? <UserMenu /> : <AuthNavigation />)}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
