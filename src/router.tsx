import { createRouter as createTanstackRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";

export const createContext = () => {
  const queryClient = new QueryClient();
  return { queryClient };
};

export const createRouter = () => {
  const router = createTanstackRouter({
    routeTree,
    context: createContext(),
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
