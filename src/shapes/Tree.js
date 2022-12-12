const { Leaf } = require("./Leaf");
const { Branch } = require("./Branch");

var max_dist = 100;
var min_dist = 10;

class Tree {
  leaves = [];
  branches = [];
  root;

  constructor(config) {
    for (var i = 0; i < config.leaves; i++) {
      this.leaves.push(new Leaf(config));
    }

    var rootPosition = createVector(config.rootX, config.rootY);
    var rootDir = createVector(0, -1);

    this.root = new Branch(null, rootPosition, rootDir, config.color);
    this.branches.push(this.root);

    var current = this.root;

    var found = false;

    while (!found) {
      for (var i = 0; i < this.leaves.length; i++) {
        var d = p5.Vector.dist(current.pos, this.leaves[i].pos);

        if (d < max_dist) {
          found = true;
        }
      }

      if (!found) {
        var branch = current.next();
        current = branch;
        this.branches.push(current);
      }
    }
  }

  grow() {
    for (var i = 0; i < this.leaves.length; i++) {
      var leaf = this.leaves[i];

      var closestBranch = null;
      var record = 100000;

      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];

        var d = p5.Vector.dist(leaf.pos, branch.pos);

        if (d < min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;
        } else if (d > max_dist) {
          //TODO
          //not a candidate
        } else if (closestBranch === null || d < record) {
          closestBranch = branch;
          record = d;
        }
      }

      if (closestBranch !== null) {
        var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();

        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for (var i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
      }
    }

    for (var i = this.branches.length - 1; i >= 0; i--) {
      var branch = this.branches[i];

      if (branch.count > 0) {
        branch.dir.div(branch.count + 1);
        this.branches.push(branch.next());
      }

      branch.reset();
    }
  }

  show() {
    for (var i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }

    for (var i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }
  }
}

export { Tree };
