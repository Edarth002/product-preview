/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        modblue: "hsl(228, 45%, 44%)",
        Verydarkblued: "hsl(216, 50%, 16%)",
        Verydarkbluedd: "hsl(216, 50%, 20%)",
        Verydarkblueline: "hsl(215, 32%, 27%)",
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        Verydarkblue: "hsl(233, 47%, 7%)",
        Darkdesaturatedblue: "hsl(229, 23%, 23%)",
        Softviolet: "hsl(277, 64%, 61%)",
        Whiteheadingstats: "hsl(0, 0%, 100%)",
        Brightorange: "hsl(31, 77%, 52%)",
        Darkcyan: " hsl(185, 75%, 39%)",
        Darkcyanide: " hsl(184, 70%, 22%)",
        Verydarkcyan: "hsl(179, 100%, 13%)",
        Transparentwhite: "hsla(0, 0%, 100%, 0.75)",
        Verylightgray: "hsl(0, 0%, 95%)",
        Darkgrayishblue: "hsl(227, 10%, 46%)",
        Darkgray: "hsl(0, 0%, 59%)",
        Slightlytransparentwhite: "hsla(0, 0%, 100%, 0.75)",
        Slightlytransparentwhitened: "hsla(0, 0%, 100%, 0.6)",
      },
      minWidth: {
        small: "250px"
      },
      fontSize: {
        required: "18px"
      },

    },
    fontFamily: {
      Opensans: ('OpenSans'),
      LexendDeca: ('LexendDeca'),
      bigshoulder: ('bigshoulder')
    },


  },
  plugins: [],
}

