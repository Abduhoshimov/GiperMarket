/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:"20px",
        center:true,
        screens:{
          dectop:"1340px"
        }
      },
      fontFamily: {
        jost: "Jost",
      },
      colors: {
        black: "#000000",
        "cannon-black": "#281800",
        "sys-light-on-surface": "#211a1a",
        primary: "#E44542",
        yellow: "#F79E1B",
        aureolin: "#feee00",
        tertiary: "#755A2F",
        heartwarming: "#ba1b1b",
        "charred-brown": " #410008",
        "darkest-dungeon": "#680012",
        burgundy: "#92001E",
        "bloodthirsty-warlock": "#eb133d",
        carbon: "#333333",
        "vermilion-cinnabar": " #e44542", //M3/sys/light/primary
        tulip: "#FF888C",
        "wildflower-bouquet": " #ffb3b4",
        "cottagecore-sunset": " #ffd9d9",
        "pink-lemonade": "#ffeceb",
        "cascading-white": " #f6f6f6",
        "dark-danger": "#2c1515",
        " nisemurasaki-purple": "#442929",
        "wine-brown": "#5d3f3f",
        raisin: " #534343",
        "touch-of-class": "#916e6e",
        "chocolate-torte": "#362F2F",
        meridian: " #857372",
        green: "#76BC21",
        vermilionCinnabar: " #e44542", 
        BasaltGrey: "#999",
        WhiteEdgar: "#EDEDED",
      },
    },
  },
  plugins: [require("daisyui")],
}