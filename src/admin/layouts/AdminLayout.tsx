import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="bg-purple-950">
      <h1 className="text-white">Panel Administrador</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
