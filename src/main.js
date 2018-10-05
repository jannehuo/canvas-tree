import _ from 'lodash';
import {randomPointFromCircle} from './utils'
const c = document.getElementById('canvas');
const context = c.getContext('2d');
const screen = {
  w: window.innerWidth,
  h: window.innerHeight
};

let mouseClick = {
  x:false,
  y:false
};

let mousePos = {
  x:0,
  y:0
};

c.width = screen.w;
c.height = screen.h;
const amount = 500;

class Leaf {
  constructor(id,x,y) {
    const points = randomPointFromCircle(screen.h / 8);
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
    this.radius = _.random(2,5);
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
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
}

class Tree {
  constructor(size) {
    this.size = size;
    this.leaves = [];
    this.createLeaves();
  }
  createLeaves() {
    _.times(this.size, (i) => {
      this.leaves.push(new Leaf(
        i,
        screen.w / 2,
        screen.h / 2
      ));
    });
  }
  draw() {
    this.leaves.forEach(leaf => leaf.update());
  }
}

window.addEventListener('click', (e) => {
  
},true);

window.addEventListener('mousemove', (e) => {
  
},true);

window.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
},true);

const updateMousePos = (x,y) => {
  mousePos = {
    x: x,
    y: y
  };
}

const updateMouseClickPos = (x,y) => {
  mouseCLick = {
    x: x,
    y: y
  };
}

const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, screen.w, screen.h);
  tree.draw();
};
const tree = new Tree(amount);
animate();