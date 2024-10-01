const defaultTheme = require("tailwindcss/defaultTheme");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.php",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/rappasoft/laravel-livewire-tables/resources/views/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class", // or 'class'
    theme: {
        extend: {
            colors: {
                grisClaro: "#FCF9F4",
            },
            screens: {
                pointerFine: {
                    raw: "(pointer: fine)",
                },
                pointerCoarse: {
                    raw: "(pointer: coarse)",
                },
            },
            fontFamily: {
                chassiS: ["Chassi S", "sans-serif"],
                apercuPro: ["Apercu Pro", "sans-serif"],
            },
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
        addVariablesForColors,
    ],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}
