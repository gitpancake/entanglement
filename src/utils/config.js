const { FXRandomIntBetween, FXRandomBool } = require("./fxrandHelper");

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
  const itsComingHome = FXRandomBool();
  const beThereOrBe = FXRandomBool();

  let rows, cols, leaves;

  if (itsComingHome) {
    cols = FXRandomIntBetween(1, 5);
    rows = 1;
  } else if (itsComingHome && beThereOrBe) {
    cols = 5;
    rows = 1;
  } else {
    rows = FXRandomIntBetween(1, 5);
    cols = FXRandomIntBetween(1, 3);
  }

  if (rows >= 2 || cols >= 2) {
    leaves = FXRandomIntBetween(250, 255);
  } else {
    leaves = FXRandomIntBetween(255, 500);
  }

  const config = {
    rows,
    cols,
    frameRate: FXRandomIntBetween(40, 60),
    palette: palettes[randomPaletteIndex],
    leaves,
    itsComingHome,
    beThereOrBe,
  };

  console.table(config);

  return config;
};
