export default {
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.35s ease-in-out",
      },
    },
  },
};
