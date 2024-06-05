const defaultTheme = require("tailwindcss/defaultTheme");

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
                oscuro: "#1E1E1E",
                gris: "#D9D9D9",
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
                olivaSans: ["Oliva Sans", "sans-serif"],
                intervogueReg: ["Intervogue Reg", "sans-serif"],
                instrumentSans: ["Instrument Sans", "sans-serif"],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
