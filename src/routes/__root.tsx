import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from 'react-hot-toast';

export const Route = createRootRoute({
  component: () => {

    return (
      <>
        <div className="min-h-screen max-w-[1236px] mx-auto">
          <div className="border border-b-transparent flex flex-col ">
            <Outlet />
          </div>
        </div>
        <Toaster />
        <TanStackRouterDevtools />
      </>
    );
  },
});