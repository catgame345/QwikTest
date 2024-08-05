import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { SideBar } from "~/components/sidebar/sidebar";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const MOCK_PROPS = {
    items: [
      { route: "/", name: "Home", key: 0 },
      { route: "/test", name: "Tests", key: 1 },
    ],
  };

  return (
    <>
      <SideBar {...MOCK_PROPS} />
      <Slot />
    </>
  );
});
