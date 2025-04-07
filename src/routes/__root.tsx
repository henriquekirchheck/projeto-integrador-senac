import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { FC, PropsWithChildren } from "react";
import appCss from "@/app.css?url";
import type { createContext } from "@/router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { App } from "@/components/App";

import themeScript from "@/lib/themeScript?url";

export const Route = createRootRouteWithContext<
  ReturnType<typeof createContext>
>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Placeholder Inc." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [{ src: themeScript, type: "module" }],
  }),
  errorComponent: (props) => (
    <RootDocument>
      <DefaultCatchBoundary {...props} />
    </RootDocument>
  ),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

const RootDocument: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <App>{children}</App>
        <Scripts />
      </body>
    </html>
  );
};

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}
