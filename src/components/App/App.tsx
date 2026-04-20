import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Register } from "../../pages/Register/Register";
import { Login } from "../../pages/Login/Login";
import { Home } from "../../pages/Home/Home";
import { Contacts } from "../../pages/Contacts/Contacts";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { Profile } from "../../pages/Profile/Profile";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
