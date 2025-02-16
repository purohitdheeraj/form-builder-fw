import Header from "@/components/Header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from 'react-hot-toast';

export const Route = createRootRoute({
  component: () => {

    return (
      <>
        <div className="min-h-screen max-w-[1236px] mx-auto">
          <Header />
          <div className="border flex flex-col min-h-screen">
            <Outlet />
          </div>
        </div>
        <Toaster />
        <TanStackRouterDevtools />
      </>
    );
  },
});