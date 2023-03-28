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
const { Particle } = require("./shapes/Particle");
const { generateConfig } = require("./utils/config");
const { FXRandomBetween } = require("./utils/fxrandHelper");

var num = 4500;
var finishIn = 0;
var ticks = 0;
var particles = [num];

window.setup = () => {
  const canvasDiv = document.getElementById("drawing-canvas");

  const sketchCanvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);

  sketchCanvas.parent("drawing-canvas");

  const config = generateConfig(sketchCanvas);

  noiseSeed(50);
  randomSeed(50);

  frameRate(200);

  // colorMode(HSB, 100);

  for (let i = 0; i < num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    const viewDistance = config.viewDistance;

    var loc = createVector(FXRandomBetween(config.borderWidth, sketchCanvas.width - config.borderWidth), FXRandomBetween(config.borderWidth, sketchCanvas.height - config.borderWidth), viewDistance);

    var angle = cos(360);

    var dir = createVector(angle, angle);

    let speed = config.speed;

    particles[i] = new Particle(loc, dir, speed, config, sketchCanvas);
  }

  finishIn = config.finishIn;
};

window.draw = () => {
  fill(0, 5, 0, 5);
  rect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }

  ticks++;

  if (ticks >= finishIn) {
    noLoop();
  }
};
