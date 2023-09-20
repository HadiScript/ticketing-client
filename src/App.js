import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./System";
import Login from "./System/Login";
import Register from "./System/Register";
import ForgetPassword from "./System/ForgetPassword";

import Admin from "./System/Admin";
import Manager from "./System/Manager";
import Agent from "./System/agent/index";
import Client from "./System/Client";
import AllUsers from "./System/Admin/AllUsers";
import AllUsersManager from "./System/Manager/AllUsersManager";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={"Not found"} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/all-users" element={<AllUsers />} />

        {/* Manager Routes */}
        <Route path="/manager" element={<Manager />} />
        <Route path="/manager/all-users" element={<AllUsersManager />} />

        {/* Agent Routes */}
        <Route path="/agent" element={<Agent />} />

        {/* client Routes */}
        <Route path="/client" element={<Client />} />
      </Routes>
    </>
  );
};

export default App;
