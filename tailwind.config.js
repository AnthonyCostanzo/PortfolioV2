module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut .5s ease-in-out",
        hero: "bounceUp 10s ease infinite",
        small: "bounceUpSmall 10s ease infinite",
        type: "type 2.7s ease-out .8s infinite alternate both",
      },

      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        bounceUp: {
          "0%": { backgroundPosition: "-20px 0px" },
          "50%": { backgroundPosition: "-30px -20px" },

          "100%": { backgroundPosition: "-20px 0px" },
        },
        bounceUpSmall: {
          "0%": { backgroundPosition: "-700px 0px" },
          "50%": { backgroundPosition: "-725px -5px" },

          "100%": { backgroundPosition: "-700px 0px" },
        },
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
          "65%, 70%": { transform: "translateX(7ch)" },
          "75%, 80%": { transform: "translateX(8ch)" },
          "85%, 90%": { transform: "translateX(9ch)" },
          "95%, 100%": { transform: "translateX(11ch)" },
        },
      }),
    },
  },
  plugins: [],
  darkMode: "class",
};
