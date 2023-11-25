declare module Data {
  type Letter = {
    id: string;
    character: string;
    name: string;
    type: "vowel" | "consonant";
    nationalSystem: string;
  };

  type Alphabet = Letter[];
}
