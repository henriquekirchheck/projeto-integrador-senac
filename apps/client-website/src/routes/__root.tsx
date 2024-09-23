import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-ctp-base w-dvw h-dvh text-ctp-text font-sans">
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
