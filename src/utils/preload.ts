export function preloadImages() {
    const paths = import.meta.glob("/public/img/icons/*.svg");
    console.log("🚀 ~ file: preload.ts:3 ~ paths:", paths);

    const images = [];

    for (const path in paths) {
        images.push(path.replace("/public", ""));
    }

    return images;
}
