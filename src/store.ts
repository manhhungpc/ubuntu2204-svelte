import { writable, readable, type Writable } from "svelte/store";

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

export const menuIcon = writable([
    "/img/icons/network-signal-good-symbolic.svg",
    "/img/icons/bluetooth-active-symbolic.svg",
]);
export const openApps: Writable<OpenApps[]> = writable([]);
export const topApp = writable("");
export const doNotDisturb = writable(false);
export const showApplication = writable(false);
export const prompts = writable([{ done: false, file: "" }]);
export const cmdRunning = writable(true);

export const locked = writable(false);
export const background = writable("/img/Wallpaper/Jammy-Jellyfish_WP_2560x1440.png");

export const confirmOff = writable(false);
export const confirmRestart = writable(false);

export const maximize: Writable<string[]> = writable([]);

export const applicationSetting = writable(false);
export const privacySetting = writable(false);
