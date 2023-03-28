import { FXRandomBetween } from "../utils/fxrandHelper";

class Particle {
  constructor(_loc, _dir, _speed, _config, _sketchCanvas) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.config = _config;
    this.sketchCanvas = _sketchCanvas;
  }

  run() {
    this.move();
    this.checkEdges();
    this.update();
  }

  move() {
    let angle = noise(this.loc.x / this.config.noiseScale, this.loc.y / this.config.noiseScale, frameCount / this.config.noiseScale) * TWO_PI * this.config.noiseStrength; //0-2PI

    this.dir.x = tan(-angle * PI * PI * PI);
    this.dir.y = tan(tan(-angle * 180));

    if (this.config.falling) {
      this.dir.x = cos(-angle * PI * PI * PI);
      this.dir.y = cos(tan(-angle * 180));
    }

    var vel = this.dir.copy();

    var directionChange = this.config.directionChange;

    vel.mult((this.speed * directionChange) / this.config.velocityDivider); //vel = vel * (speed*d)

    this.loc.add(vel); //loc = loc + vel
  }

  checkEdges() {
    var distance = dist(this.sketchCanvas.width / 2, this.sketchCanvas.height / 2, this.loc.x, this.loc.y);

    const isOutOfBounds = () => {
      return this.loc.x < this.config.borderWidth || this.loc.x > width - this.config.borderWidth || this.loc.y < this.config.borderWidth || this.loc.y > height - this.config.borderWidth;
    };

    if (distance > this.sketchCanvas.width - this.config.borderWidth || isOutOfBounds()) {
      this.loc.x = FXRandomBetween(this.config.borderWidth, width - this.config.borderWidth);
      this.loc.y = FXRandomBetween(this.config.borderWidth, height - this.config.borderWidth);
    }
  }

  update() {
    fill(0, 5, 0, 0.25);

    stroke(this.config.palette.color);

    ellipse(this.loc.x, this.loc.y, this.loc.z);
  }
}

export { Particle };
