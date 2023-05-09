/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "vibrant-blue": "#0000FF",
                "vibrant-red": "#FF0000",
                "card-bg": "#7ddffa",
            },
            fontFamily: {
                kodomo: "kodomo",
                "kodomo-light": "kodomoLight",
                archivo: "archivo",
            },
        },
    },
    plugins: [],
};
