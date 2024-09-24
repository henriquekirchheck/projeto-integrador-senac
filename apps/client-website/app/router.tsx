import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

export function createRouter() {
  const queryClient = new QueryClient();
  const router = createTanStackRouter({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    routeTree,
    context: {
      queryClient
    },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return routerWithQueryClient(
    router,
    queryClient,
  );
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
