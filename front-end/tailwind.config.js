/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src//*.{js,jsx,ts,tsx}", "./index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                druzhok: ["DRUZHOK", "serif"],
                feogra: ["Feogra", "sans-serif"]
            }
        },
    },
    plugins: [],
}