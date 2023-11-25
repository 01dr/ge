import type { Component } from "solid-js";

import { Letter } from "./components/Letter";
import { ALPHABET } from "./data";

const App: Component = () => {
  return (
    <div class="w-full h-screen flex py-10 justify-center">
      <div class="max-w-lg flex flex-row flex-wrap justify-center">
        {ALPHABET.map((letter) => (
          <Letter letter={letter} />
        ))}
      </div>
    </div>
  );
};

export { App };
