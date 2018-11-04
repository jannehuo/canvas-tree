import { screen, context } from "./canvas";
import { getDistance, getRelativeTo, getDirection } from "./utils";

class Wind {
  constructor() {
    this.lineColor = "#f2f2f2";
    this.lineWidth = 10;
    this.from = { x: 0, y: 0 };
    this.to = { x: 0, y: 0 };
    this.drawing = false;
    this.windDirection;
    this.windDistance;
    this.windPower = 0;
  }
  draw() {
    if (this.drawing) {
      context.beginPath();
      context.moveTo(this.from.x, this.from.y);
      context.lineTo(this.to.x, this.to.y);
      context.lineWidth = this.lineWidth;
      context.strokeStyle = this.lineColor;
      context.stroke();
    }
  }
  release() {
    this.drawing = false;
    this.distance(this.from, this.to);
    this.direction(this.from, this.to);
    this.power();
    this.from = { x: 0, y: 0 };
    this.to = { x: 0, y: 0 };
  }
  direction(from, to) {
    this.windDirection = getDirection(
      getRelativeTo(from, to),
      this.windDistance
    );
  }
  distance(from, to) {
    this.windDistance = getDistance(getRelativeTo(from, to));
  }
  power() {
    console.log(this.windDirection);
    console.log(this.windDistance);
  }
}

export default Wind;
