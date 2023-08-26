export function preloadImages() {
    const paths = import.meta.glob("/public/img/icons/*.svg");

    const images = [];

    for (const path in paths) {
        images.push(path.replace("/public", ""));
    }

    return images;
}
