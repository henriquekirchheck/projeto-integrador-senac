import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import { Header } from "../components/Header";
import type { QueryClient } from "@tanstack/react-query";

import appCss from "~/styles/app.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "Placeholder Inc.",
    },
  ],
  links: () => [
    { rel: "stylesheet", href: appCss },
  ],
  component: () => (
    <RootDocument>
      <div className="min-h-dvh min-w-dvw bg-ctp-base font-sans text-ctp-text">
        <Header />
        <Outlet />
      </div>
    </RootDocument>
  ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
        <Scripts />
      </Body>
    </Html>
  );
}
