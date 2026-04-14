import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Register } from "../../pages/Register/Register";
import { Login } from "../../pages/Login/Login";
import { Home } from "../../pages/Home/Home";
import { Contacts } from "../../pages/Contacts/Contacts";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
