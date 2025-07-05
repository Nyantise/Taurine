import { blank } from "./blank"
import { pt } from "./pt"
import { en } from "./en"

export const translationList = {
    blank: { translation: blank },
    en: { translation: en },
    pt: { translation: pt },
} 

export type TranslationOptions = keyof typeof translationList 