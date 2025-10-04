import { useMemo } from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "../App";
import { paths } from "../config/paths";

// TODO: loader追加検討
const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <App />,
    },
    {
      path: paths.auth.path,
      element: <>login</>,
    },
  ]);

const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};

export default AppRouter;
