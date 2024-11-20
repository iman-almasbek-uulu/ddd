import { create } from "zustand";

type Language = "ru" | "en" | "kg";

interface LanguageStore {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (ru: string, en: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  currentLanguage: "en",
  setLanguage: (language: Language) => set({ currentLanguage: language }),
  t: (ru: string, en: string) => {
    const currentLanguage = get().currentLanguage;
    return currentLanguage === "ru" ? ru : en;
  },
}));