import Tree from "./Tree";
import Wind from "./Wind";
import { screen } from "./canvas";

const treeSizes = {
  large: 700,
  medium: 500,
  small: 300
};

const radiusSizes = {
  large: 200,
  medium: 150,
  small: 100
};

const treeSize = {};

if (screen.w > 1024) {
  treeSize.radius = radiusSizes.large;
  treeSize.size = treeSizes.large;
} else if (screen.w > 768 && screen.w < 1024) {
  treeSize.radius = radiusSizes.medium;
  treeSize.size = treeSizes.medium;
} else {
  treeSize.radius = radiusSizes.small;
  treeSize.size = treeSizes.small;
}

class World {
  constructor() {
    this.create();
    this.tree;
    this.wind;
  }
  create() {
    this.tree = new Tree(treeSize.size, treeSize.radius);
    this.wind = new Wind();
  }
  update() {
    this.tree.draw();
    this.wind.draw();
  }
}

export default World;
