import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from 'react-hot-toast';

export const Route = createRootRoute({
  component: () => {

    return (
      <>
        <div className="min-h-screen  container ">
          <header>I am Header</header>
          <Outlet />
          <footer>Footer</footer>
        </div>
        <Toaster />
        <TanStackRouterDevtools />
      </>
    );
  },
});