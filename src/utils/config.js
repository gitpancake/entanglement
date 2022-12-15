const { FXRandomIntBetween, FXRandomBool } = require("./fxrandHelper");

const palettes = [
  {
    name: "Euphoria",
    options: ["#DB504A", "#FF6F59", "#F26419", "#43AA8B", "#81F0E5"],
  },
  {
    name: "Violet",
    options: ["#7161EF", "#DEC0F1", "#B79CED", "#957FEF", "#7161EF"],
  },
  {
    name: "Postie Pete",
    options: ["#531CB3", "#944BBB", "#AA7BC3"],
  },
  {
    name: "Pinky and the Brain",
    options: ["#FF499E", "#D264B6", "#A480CF", "#779BE7", "#FF4AF6"],
  },
  {
    name: "Magic Mint",
    options: ["#A4E0A8", "#95DB9A", "##A3F8FF", "#A3F8EE", "#A3F8DD"],
  },
  {
    name: "Wisp",
    options: ["#E8E9EB"],
  },
  {
    name: "Crystals",
    options: ["#5DFDCB", "#90D7FF", "#C9F9FF"],
  },
  {
    name: "Jungle",
    options: ["#46E41A", "#17CB4A", "#3AB340"],
  },
  {
    name: "Limetastic",
    options: ["#CAFE48", "#C5FE34", "#BFFE20", "#B9FE0B"],
  },
];

export const generateConfig = () => {
  const randomPaletteIndex = FXRandomIntBetween(0, palettes.length);
  const palette = palettes[randomPaletteIndex];
  const frameRate = FXRandomIntBetween(20, 60);
  const leaves = FXRandomIntBetween(300, 400);
  const itsComingHome = FXRandomBool();
  const branchLength = leaves < 350 ? FXRandomIntBetween(10, 12) : FXRandomIntBetween(5, 10);

  let rows, cols;

  if (itsComingHome) {
    cols = FXRandomIntBetween(1, 4);
    rows = 1;
  } else {
    rows = FXRandomIntBetween(1, 4);

    if (rows > 3) {
      cols = FXRandomIntBetween(1, 2);
    } else {
      cols = FXRandomIntBetween(1, 3);
    }
  }

  const config = {
    rows,
    cols,
    frameRate,
    palette,
    leaves,
    itsComingHome,
    branchLength,
  };

  console.table(config);

  return config;
};
