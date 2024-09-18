import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="text-3xl font-semibold dark:text-2xl">Hello World!</h1>
    </>
  );
}
