import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="dark:text-2xl text-3xl font-semibold">Hello World!</h1>
    </>
  );
}
