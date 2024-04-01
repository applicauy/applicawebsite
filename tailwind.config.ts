import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-bg": "#1b1b1b",
                "secondary-bg": "#252525",
                highlight: "#e5a818",
                // "secondary" because tailwind already adds a "muted" color.
                "secondary-muted": "#848483",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
export default config;
