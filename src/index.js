// // these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG window. use it instead of fxrand()

// // note about the fxrand() window.// // when the "fxhash" is always the same, it will generate the same sequence of
// // pseudo random numbers, always

// //----------------------
// // defining features
// //----------------------
// // You can define some token features by populating the $fxhashFeatures property
// // of the window object.
// // More about it in the guide, section features:
// // [https://fxhash.xyz/articles/guide-mint-generative-token#features]
// //
// // window.$fxhashFeatures = {
// //   "Background": "Black",
// //   "Number of lines": 10,
// //   "Inverted": true
// // }

// // this code writes the values to the DOM as an example
// const container = document.createElement("div")
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container)

//https://www.openprocessing.org/sketch/157576
// Maurer Rose
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/4uU9lZ-HSqA
// https://editor.p5js.org/codingtrain/sketches/qa7RiptE9
const { Tree } = require("./shapes/Tree");
const { generateConfig } = require("./utils/config");
const { FXRandomBetween, FXRandomIntBetween } = require("./utils/fxrandHelper");

var trees = [];

window.setup = () => {
  createCanvas(800, 800);
  background("#071013");

  const config = generateConfig();

  frameRate(FXRandomBetween(20, 40));

  const cols = config.cols;
  const rows = config.rows;

  const step = 40;

  const yMargin = (height - step * rows) / 2;
  const xMargin = (width - step * cols) / 2;

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      const deviationX = c === 0 || c === cols ? xMargin : FXRandomBetween((c + 1) * step + xMargin, (c + 1) * step - step + xMargin);

      const rootX = deviationX;
      const rootY = height - ((r + 1) * step - step / 2) - (step / 2 + yMargin);

      const leafAreaXStart = 0 + step;
      const leafAreaXEnd = width - step;

      const leafAreaYStart = 0 + step;
      const leafAreaYEnd = height - step;

      const treeConfig = {
        rootX,
        rootY,
        leafAreaXStart,
        leafAreaXEnd,
        leafAreaYStart,
        leafAreaYEnd,
        color: config.palette.options[FXRandomIntBetween(0, config.palette.options.length)],
        leaves: FXRandomBetween(499, 500),
      };

      trees.push(new Tree(treeConfig));
    }
  }
};

window.draw = () => {
  background("#071013");

  for (var i = 0; i < trees.length; i++) {
    trees[i].show();
    trees[i].grow();
  }
};
