import { openApps, topApp } from "src/store";

export function showApp(name: string, component: any, img: string) {
    openApps.subscribe((opens) => {
        if (opens.find((app) => app.name === name)) return;
    });
    openApps.update((opens) => [...opens, { name, component, img }]);
    topApp.set(name);
}
