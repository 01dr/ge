import type { Component } from "solid-js";

type LetterProps = {
  letter: Data.Letter;
};

let currentAudio: HTMLAudioElement | null = null;

const Letter: Component<LetterProps> = (props) => {
  const {
    letter: { id, character, name },
  } = props;

  const audio = new Audio(
    `${import.meta.env.VITE_APP_BASE_PATH}/alphabet-audio/${id}.mp3`
  );

  const handleLetterClick = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    audio.play();
    currentAudio = audio;
  };

  return (
    <button type="button" class="w-20 py-2 px-4" onClick={handleLetterClick}>
      <div class="text-3xl">{character}</div>
      <div class="text-sm mt-1">{name}</div>
    </button>
  );
};

export { Letter };
