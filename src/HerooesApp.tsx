import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";

const HerooesApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default HerooesApp;
