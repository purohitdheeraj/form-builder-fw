import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="min-h-screen max-w-screen-xl mx-auto">
          <div className="border min-h-screen border-b-transparent flex flex-col ">
            <Outlet />
          </div>
        </div>
        <Toaster />
      </>
    );
  },
});
