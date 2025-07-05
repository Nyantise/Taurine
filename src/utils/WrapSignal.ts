import { Observable } from "@legendapp/state";

export function wrapSignal<T>(store: Observable<T>) {
    return {
        isSignal: false,
        state: store
    };
}