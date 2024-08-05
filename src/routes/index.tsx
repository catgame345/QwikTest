import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main class="mx-1 mt-4 rounded border border-indigo-800 bg-indigo-700 py-2 text-center font-mono text-3xl font-bold">
        <h1 class="mb-7 mt-2 text-5xl font-bold">CatWeb</h1>
        <section class="mx-1 rounded border-cyan-700 bg-cyan-600 py-3">
          <h3>Bienvenido o bienvenida usuario</h3>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
