import { lazy } from "react";
import AdminLayout from "@/admin/layouts/AdminLayout";
import HeroesLayout from "@/heroes/layouts/HeroesLayout";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HomePage from "@/heroes/pages/home/HomePage";
// import AdminPage from "@/admin/AdminPage";
// import SearchPage from "@/heroes/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

const AdminPage = lazy(() => import("@/admin/AdminPage"));
const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/heroes/1",
        element: <HeroPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
