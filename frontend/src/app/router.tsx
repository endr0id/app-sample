import { useMemo } from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "../App";
import { paths } from "../config/paths";

import LoginRoute from "./routes/auth/login";

// TODO: loader追加検討
const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <App />,
    },
    {
      path: paths.auth.path,
      element: <LoginRoute />,
    },
  ]);

const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};

export default AppRouter;
