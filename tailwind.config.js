/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "376px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      colors: {
        primary: "#1C1B17",
        secondary: "#F6F5F4",
        third:"#CCCCCC",
        danger: "#ff0000",
        success: "#00ff00",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        montaga: ["Montaga", "serif"],
        jost: ["Jost", "sans-serif"],
        
      },
      clipPath: {
        /* 'custom': 'polygon(0 0, 100% 0, 100% 100%, 9% 100%, 0 80%)', */
        'custombl': 'polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)',
        'custombl2': 'polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 83%)',
        'custombr': 'polygon(0 0, 100% 0, 100% 65%, 70% 100%, 0 100%)',
        'custombr2': 'polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)',
        'customtl': 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 25%)',
        'customtr': 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
