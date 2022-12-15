const { FXRandomBetween, FXRandomIntBetween } = require("../utils/fxrandHelper");

class Branch {
  pos;
  parent;
  dir;
  reached = false;
  count = 0;
  len;
  origDir;
  color;
  size;
  drawer;
  deviate;
  weightDeviation;
  itsComingHome;
  config;

  constructor(parent, pos, dir, color, config) {
    this.pos = pos;
    this.parent = parent;
    this.dir = dir;
    this.origDir = dir.copy();
    this.len = config.branchLength;

    this.itsComingHome = config.itsComingHome;
    this.config = config;

    this.color = color;
    this.size = FXRandomBetween(0, 5);
    this.drawer = FXRandomBetween(0, 10);
    this.deviate = FXRandomBetween(0, 20);
    this.weightDeviation = FXRandomBetween(0.25, 1);
  }

  next() {
    var nextDir = p5.Vector.mult(this.dir, this.len);
    var nextPos = p5.Vector.add(this.pos, nextDir);

    return new Branch(this, nextPos, this.dir.copy(), this.color, this.config);
  }

  show() {
    if (this.parent === null) {
      return;
    }

    stroke(this.color);

    const rando = Math.floor(this.drawer);

    if (this.itsComingHome) {
      noFill();

      strokeWeight(0.5);

      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    noFill();

    strokeWeight(0.75);

    line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);

    stroke("#fff");

    strokeWeight(0.25);

    line(this.pos.x - 1, this.pos.y + 1, this.parent.pos.x - 1, this.parent.pos.y + 0.5);
  }

  reset() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }
}

export { Branch };
