const { FXRandomIntBetween, FXRandomOption } = require("./fxrandHelper");

const palettes = [
  {
    name: "Euphoria",
    options: ["#DB504A", "#FF6F59", "#254441", "#43AA8B", "#B2B09B"],
  },
  {
    name: "Violet",
    options: ["#7161EF", "#DEC0F1", "#B79CED", "#957FEF", "#7161EF"],
  },
  {
    name: "Pastel Purple",
    options: ["#531CB3", "#944BBB", "#AA7BC3", "#CC92C2", "#DBA8AC"],
  },
  {
    name: "Pinky",
    options: ["#FF499E", "#D264B6", "#A480CF", "#779BE7", "#49B6FF"],
  },
  {
    name: "Magic Mint",
    options: ["#071013", "#071013", "#87D68D", "#93B48B", "#8491A3"],
  },
  {
    name: "Wisp",
    options: ["#E8E9EB"],
  },
  {
    name: "Crystals",
    options: ["#5DFDCB", "#90D7FF", "#C9F9FF", "#BFD0E0", "#B8B3BE"],
  },
];

export const generateConfig = () => {
  const randomPaletteIndex = FXRandomIntBetween(0, palettes.length);
  const rows = FXRandomIntBetween(1, 5);
  const cols = FXRandomIntBetween(1, 2);

  return {
    palette: palettes[randomPaletteIndex],
    rows,
    cols,
  };
};
