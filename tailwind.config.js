/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                primary: {
                    50: "#FFF5F2",
                    100: "#FFF1EE",
                    200: "#FFE4DE",
                    300: "#FFD5CC",
                    400: "#FFBCAD",
                    500: "#FE795D",
                    600: "#EF562F",
                    700: "#EB4F27",
                    800: "#CC4522",
                    900: "#A5371B",
                },
            },
        },
        colors: {
            "dark-1": "var(--bg-dark-1)",
            "dark-2": "var(--bg-dark-2)",
            "dark-3": "var(--bg-dark-3)",
            "dark-4": "var(--dark-4)",
            "main-orange": "var(--main-orange)",
            "light-white": "var(--bg-light-white)",
            "warm-grey": "var(--warm-grey)",
            "soft-white": "var(--bg-soft-white)",
            "darker-white": "var(--bg-darker-white)",
            "dark-hover": "var(--bg-dark-hover)",
            "grey-1": "var(--bg-grey-1)",
            "grey-2": "var(--grey-2)",
            "red-1": "var(--red-1)",
            "green-1": "var(--green-1)",
        },
    },
    plugins: [require("flowbite/plugin")],
    darkMode: "class",
};
