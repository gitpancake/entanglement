const { FXRandomBetween } = require("../utils/fxrandHelper");

class Leaf {
  pos;
  color;

  constructor(config) {
    this.color = config.color;

    this.pos = createVector(FXRandomBetween(config.leafAreaXStart, config.leafAreaXEnd), FXRandomBetween(config.leafAreaYStart, config.leafAreaYEnd));
  }

  show() {
    noFill();
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}

export { Leaf };
