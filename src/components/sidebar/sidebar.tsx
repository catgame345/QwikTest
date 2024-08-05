import { component$, Slot } from "@builder.io/qwik";

export interface SideBarProps {
  items: { route: string; name: string; key: number }[];
}

export const SideBar = component$((props: SideBarProps) => {
  return (
    <>
      <nav class="mx-1 mt-1 rounded border border-indigo-900 bg-indigo-800 text-center font-mono">
        <h1 class="text-3xl font-bold text-gray-200">CatWeb</h1>
        <ul class="flex">
          {props.items.map((i) => (
            <>
              <a
                href={i.route}
                key={i.key}
                class="ml-5 rounded border border-indigo-800 bg-indigo-700 px-4 py-1 text-center text-xl text-gray-200 hover:border-indigo-900 hover:bg-indigo-800"
              >
                <li>{i.name}</li>
              </a>
            </>
          ))}
        </ul>
      </nav>
      <Slot />
    </>
  );
});
