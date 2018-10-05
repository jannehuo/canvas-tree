const c = document.getElementById('canvas');
const context = c.getContext('2d');
const screen = {
  w: window.innerWidth,
  h: window.innerHeight
};

export function init() {
  c.width = screen.w;
  c.height = screen.h;
}

export {screen}
export {context}