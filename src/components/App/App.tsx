import { Route, Routes } from "react-router";
import { Layout } from "../Layout/Layout";
import { UsersPage } from "../../pages/UsersPage";
import { AdduserPage } from "../../pages/AddUserPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UsersPage />} />
        <Route path="add" element={<AdduserPage />} />
      </Route>
    </Routes>
  );
};
