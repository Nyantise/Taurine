import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"
import { LeafPaths } from "@utils/TsUtils"
import { base } from "./base"
import { pt } from "./pt"
import { en } from "./en"


export const translationList = {
    blank: { translation: base },
    en: { translation: en },
    pt: { translation: pt },
}

export type TranslationOptions = keyof typeof translationList
export type Translation = typeof base
export type TPaths = LeafPaths<Translation>
// | PrefixedWithDots<Translation>;

export function changeTranslation(lang: TranslationOptions){
    i18next.changeLanguage(lang)
}

export function Translate(path: TPaths) {
    const { t } = useTranslation()

    // if (path?.includes("..")) {
    //     const spath = window.location.pathname.split("/")
    //     spath.shift()

    //     return t(searchObject(base, [...spath, path.replace("..", "")]) as string)
    // }
    return t(path)
}

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: "blank" as TranslationOptions,
        resources: translationList
    })
