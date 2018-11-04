import _ from "lodash";
import { init, screen, context } from "./canvas";
import World from "./World";
init();

const world = new World();

window.addEventListener("mousedown", e => {
  world.wind.from = {
    x: e.clientX,
    y: e.clientY
  };
  window.addEventListener("mousemove", inputMove, false);
});

window.addEventListener("mouseup", e => {
  world.wind.release();
  window.removeEventListener("mousemove", inputMove, false);
});

const inputMove = e => {
  world.wind.drawing = true;
  world.wind.to = {
    x: e.clientX,
    y: e.clientY
  };
};

const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, screen.w, screen.h);
  world.update();
};

animate();
