import { $, component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    count: 0,
    input: "",
    new_input: "",
  });

  const increment = $(() => {
    state.count += 1;
  });

  const decrement = $(() => {
    state.count -= 1;
  });

  const handleInput = $((event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      state.input = event.target.value;
    }
  });

  const handleNewInput = $((event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      state.new_input = event.target.value;
    }
  });

  const SubmitNewInput = $(async (event: Event) => {
    event.preventDefault();
    console.log(state.new_input);
  });

  return (
    <>
      <main>
        <div class="mx-1 mt-3 rounded border-zinc-900 bg-zinc-800 py-2 text-center font-mono">
          <h1 class="mb-4 text-3xl font-bold text-white">
            El contador es: {state.count}
          </h1>
          <button
            class="mr-3 border border-blue-700 bg-blue-600 px-4 text-2xl font-bold text-white hover:border-blue-800 hover:bg-blue-700"
            onClick$={increment}
          >
            Sum
          </button>
          <button
            class="border border-red-700 bg-red-600 px-4 text-2xl font-bold text-white hover:border-red-800 hover:bg-red-700"
            onClick$={decrement}
          >
            Res
          </button>
        </div>

        <div class="mx-1 mt-3 rounded border-zinc-800 bg-zinc-700 py-2 text-center font-mono">
          <h1 class="mb-4 text-3xl font-bold text-white">
            El valor ingresado es: {state.input}
          </h1>
          <input type="text" value={state.input} onInput$={handleInput} />
        </div>

        <div class="mx-1 mt-3 rounded border-zinc-800 bg-zinc-700 py-2 text-center font-mono">
          <h1 class="mb-4 text-3xl font-bold text-white">
            El valor ingresado es: {state.new_input}
          </h1>
          <form onSubmit$={SubmitNewInput}>
            <input
              type="text"
              value={state.new_input}
              onInput$={handleNewInput}
            />
            <button
              type="submit"
              class="ml-3 border border-blue-700 bg-blue-600 px-4 text-2xl font-bold text-white hover:border-blue-800 hover:bg-blue-700"
            >
              Subir
            </button>
          </form>
        </div>
      </main>
    </>
  );
});
