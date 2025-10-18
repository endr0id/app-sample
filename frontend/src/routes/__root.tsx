import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/sign-in">SignIn</Link>
      <Link to="/signup">SignUp</Link>
    </div>
    <hr />
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
