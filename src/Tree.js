import _ from 'lodash';
import {randomPointFromCircle} from './utils';
import {screen, context} from './canvas';

class Leaf {
  constructor(id,x,y, radius) {
    const points = randomPointFromCircle(radius);
    this.spreadValues = {
      x: x + points.x,
      y: y + points.y,
    };
    this.id = id;
    this.x = this.spreadValues.x;
    this.y = this.spreadValues.y;
    this.x0 = this.x;
    this.y0 = this.y;
    this.xVel = 0;
    this.yVel = 0;
    this.colors = ["#2c7a47","#1b4f2d","#0f4722","#095924"];
    this.color = _.sample(this.colors);
    this.size = _.random(10,15);
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x,this.y,this.size, this.size);
  }
  update() {
    this.draw();
  }
  
  getForce(distance) {
    let force = distance * (1 / 10);
    return force;
  }
  getRepel(distance) {
    let maxDistance = 100;
    let force = (maxDistance - distance) / maxDistance;

    if(force < 0 ) {
      force = 0;
    }
    return force;
  }
  clear() {
    context.clearRect(0, 0, screen.w, screen.h);
  }
}

class Trunk {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.colors = ["#4f4223","#635533","#443a1f","#564823"];
    this.color = _.sample(this.colors);
    this.length = _.random(150,200);
    this.width = _.random(10,20);
    this.bottom = this.y + this.length;
  }
  draw() {
    context.beginPath();
    context.moveTo(this.x,this.y);
    context.lineTo(this.x, this.bottom);
    context.lineWidth = this.width;
    context.strokeStyle = this.color; 
    context.stroke();
    this.top();
    
  }
  top() {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x - 80, this.y - 80);
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + 80, this.y - 80);
    context.lineWidth=this.width;
    context.strokeStyle='color';
    context.stroke();    
  }
  update() {
    this.draw();
  }
}

class Tree {
  constructor(size, radius) {
    this.size = size;
    this.radius = radius;
    this.leaves = [];
    this.trunk;
    this.createTrunk();
    this.createLeaves();
  }
  createLeaves() {
    _.times(this.size, (i) => {
      this.leaves.push(new Leaf(
        i,
        screen.w / 2,
        (screen.h / 2) - 100,
        this.radius
      ));
    });
  }
  createTrunk() {
    this.trunk = new Trunk(screen.w / 2, screen.h / 2);
  }
  draw() {
    this.trunk.update();
    this.leaves.forEach(leaf => leaf.update());
  }
}

export default Tree;