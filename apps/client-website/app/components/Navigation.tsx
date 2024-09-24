import { Link, LinkProps } from "@tanstack/react-router";
import { motion } from "framer-motion";

const routes = [
  {
    name: "Home",
    href: "/",
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
                    <span className="text-ctp-text group-hover:text-ctp-yellow font-bold">
                      {route.name}
                    </span>
                    {isActive && (
                      <motion.div
                        className="bg-ctp-text group-hover:bg-ctp-yellow transition-inset absolute inset-x-0 bottom-0 h-1 rounded-xl group-hover:inset-x-1 group-hover:bottom-0.5"
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
