import { LeafPaths } from "@utils/TsUtils";

export const blank = {
    app: {
        simpleDisplay: ""
    },
    tray: {

    },
    overlay: {

    },
    test: {
        app: {
            hi: ""
        }
    }
}

export type Translation = typeof blank
export type TPaths = LeafPaths<Translation> 
// | PrefixedWithDots<Translation>;