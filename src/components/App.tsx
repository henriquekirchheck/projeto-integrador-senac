import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

export const App: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
