import { writable, readable } from "svelte/store";

export const brightness = writable(100);
export const audio = writable(40);

export const datetime = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});
