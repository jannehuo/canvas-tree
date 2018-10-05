export function randomPointFromCircle(radius) {
  const angle = Math.random() * 2 * Math.PI;
  const radius_sq = Math.random() * radius * radius;
  const x = Math.sqrt(radius_sq) * Math.cos(angle);
  const y = Math.sqrt(radius_sq) * Math.sin(angle);
  return {
    x: x,
    y: y
  };
}

export function getRelativeTo(v1,v2) {
  const relativeToTarget = {
    x: v1.x - v2.x,
    y: v1.y - v2.y
  };
  return relativeToTarget;
}

export function getDistance(relative) {
  const distance = Math.sqrt(
    relative.x * relative.x + 
    relative.y * relative.y
  );
  
  return distance;
}

export function getDirection(relativeToTarget, distance) {
  if(distance === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  return {
    x: relativeToTarget.x / distance,
    y: relativeToTarget.y / distance
  };
}