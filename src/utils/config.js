const { FXRandomIntBetween, FXRandomBool, FXRandomBetween } = require("./fxrandHelper");

// const palettes = [
//   {
//     name: "Euphoria",
//     options: ["#DB504A", "#FF6F59", "#F26419", "#43AA8B", "#81F0E5"],
//   },
//   {
//     name: "Violet",
//     options: ["#7161EF", "#DEC0F1", "#B79CED", "#957FEF", "#7161EF"],
//   },
//   {
//     name: "Postie Pete",
//     options: ["#531CB3", "#944BBB", "#AA7BC3"],
//   },
//   {
//     name: "Pinky and the Brain",
//     options: ["#FF499E", "#D264B6", "#A480CF", "#779BE7", "#FF4AF6"],
//   },
//   {
//     name: "Magic Mint",
//     options: ["#A4E0A8", "#95DB9A", "##A3F8FF", "#A3F8EE", "#A3F8DD"],
//   },
//   {
//     name: "Wisp",
//     options: ["#E8E9EB"],
//   },
//   {
//     name: "Crystals",
//     options: ["#5DFDCB", "#90D7FF", "#C9F9FF"],
//   },
//   {
//     name: "Jungle",
//     options: ["#46E41A", "#17CB4A", "#3AB340"],
//   },
//   {
//     name: "Limetastic",
//     options: ["#CAFE48", "#C5FE34", "#BFFE20", "#B9FE0B"],
//   },
// ];

const palettes = [
  {
    name: "Euphoria",
    color: "#81F0E5",
  },
  {
    name: "Crystals",
    color: "#C9F9FF",
  },
  {
    name: "Postie Pete",
    color: "#944BBB",
  },
  {
    name: "Wisp",
    color: "#E8E9EB",
  },
];

export const generateConfig = (sketchCanvas) => {
  const finishIn = FXRandomBetween(500, 1000);

  const directionChange = FXRandomBetween(1, 1.5);
  const palette = palettes[FXRandomIntBetween(0, palettes.length)];

  const randomSpeed = FXRandomBool(0.75);

  let speed = FXRandomBetween(1, 5);

  const planet = FXRandomBool(0.5);
  const borderWidth = 50;

  let viewDistance = FXRandomBetween(0.25, 0.75);
  let velocityDivider = FXRandomIntBetween(3, 5);

  const noiseScale = FXRandomBetween(250, 750); // FXRandomIntBetween(1000, 4000);
  const noiseStrength = FXRandomBetween(0.025, 0.03);

  let travelling = FXRandomBool(0.5);
  let distance = FXRandomBetween(sketchCanvas.width / 4, sketchCanvas.width / 2);

  if (planet) {
    viewDistance = FXRandomBetween(0.5, 0.75);
    velocityDivider = FXRandomBetween(2, 4);
    travelling = false;
    distance = sketchCanvas.width / 4;
  }

  if (travelling) {
    viewDistance = FXRandomBetween(0.5, 0.75);
  }

  const config = {
    finishIn,
    viewDistance,
    palette,
    directionChange,
    randomSpeed,
    speed,
    planet,
    velocityDivider,
    noiseScale,
    noiseStrength,
    falling: travelling,
    distance,
    borderWidth,
  };

  console.table(config);

  return config;
};

/**
 * Configurables:
 *  Num + View Distance. Low num = high view distance, high num = low view distance
 *  Angle -> -360 -> 360
 * Noise Scale -> 500 -> 9000
 *
 * Wispy = cos, hectic = tan
 */
