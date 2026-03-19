import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LangStore {
  lang: string;
  changeLang: (newLang: string) => void;
  a: number;
  b: number;
}
// const createWithTypes = create<LangStore>();

// const useStore = createWithTypes((set) => {});

export const useLangStore = create<LangStore>()(
  persist(
    (set) => {
      return {
        lang: "en",
        changeLang: (newLang) => set({ lang: newLang }),
        a: 5,
        b: 10,
      };
    },
    {
      name: "app-lang",
      partialize: (state) => {
        return {
          lang: state.lang,
        };
      },
    },
  ),
);

export const selectLang = (state: LangStore) => state.lang;
