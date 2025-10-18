import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/auth/signin">SignIn</Link>
      <Link to="/auth/signup">SignUp</Link>
    </div>
    <hr />
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
