import {screen, context} from './canvas';

class Wind {
  constructor() {
    this.lineColor = "#f2f2f2";
    this.lineWidth = 10;
    this.from = {x:0,y:0};
    this.to = {x:0,y:0};
    this.drawing = false;
  }
  draw() {
    if(this.drawing) {
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
    this.from = {x:0,y:0};
    this.to = {x:0,y:0};
  }
  direction() {

  }
}

export default Wind;