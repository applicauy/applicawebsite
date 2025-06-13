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
                "secondary-bg": "#262626",
                highlight: "#e5a818",
                // "secondary" because tailwind already adds a "muted" color.
                "secondary-muted": "#848483",
                "secondary-text": "#B69FE2",
                "violet-background": "#6233CE",
                "violet": "#b69fe2"
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            mdplus: "800px",
            lg: "1025px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
export default config;
