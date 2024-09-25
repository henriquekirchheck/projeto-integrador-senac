import { Link, LinkProps } from "@tanstack/react-router";
import { motion } from "framer-motion";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Sobre",
    href: "/sobre",
  },
] as const satisfies {
  name: string;
  href: LinkProps["to"];
}[];

const KEY_UNDERLINE = "path_decoration";

export function Navigation() {
  return (
    <nav>
      <ul className="flex gap-2.5">
        {routes.map((route) => {
          return (
            <li key={route.href} className="group">
              <Link to={route.href} activeOptions={{ exact: true }}>
                {({ isActive }) => (
                  <div className="relative flex flex-col rounded p-1">
                    <span className="font-bold text-ctp-text group-hover:text-ctp-yellow">
                      {route.name}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-x-0 bottom-0 h-1 rounded-xl bg-ctp-text transition-inset group-hover:inset-x-1 group-hover:bottom-0.5 group-hover:bg-ctp-yellow"
                        layoutId={KEY_UNDERLINE}
                      />
                    )}
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
