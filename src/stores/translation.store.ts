import { TranslationOptions } from "@assets/translations"
import { observable } from "@legendapp/state"
import i18next from "i18next"
import { MultiWindowStore } from "@utils/MultiWindowStore";
import { wrapSignal } from "@utils/WrapSignal";

export const translate$ = wrapSignal(observable({
        lang: "blank" as TranslationOptions,
}))

translate$.state.lang.onChange(({ value }) => i18next.changeLanguage(value));

MultiWindowStore({
    store: translate$,
    tauriEvent: "translateStore",
    logging: true,
    persistKey: "testkey"
});