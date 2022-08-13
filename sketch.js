let cell = 20;
let grid = [];
let visited = [];
let xSize;
let ySize;
let currX;
let currY;
let neighbours;
let currNeighbour;

function setup() {
  createCanvas(600, 600);
  xSize = width / cell;
  ySize = height / cell;
  for (let i = 0; i < xSize * ySize; i++) {
    grid.push(new Wall(indexToCoord[0],indexToCoord[1]))
  }
  setStartCell();
}

function draw() {
  background(50);
  for (let i = 0; i < grid.length; i++) {
    grid[i].draw();
  }
}

function coordToIndex(x, y) {
  return (x + (y * xSize));
}

function indexToCoord(i) {
  return [(xSize)%i,floor((ySize)/i)]
}

function getNeighbours(x,y) {
  let neighbours = [];
  if (x > 0) { 
    neighbours.push(grid[coordToIndex(x-1,y)])
  }
  if (y > 0) {
    neighbours.push(grid[coordToIndex(x, y-1)])
  }
  if (x < xSize-1) {
    neighbours.push(grid[coordToIndex(x + 1, y)])
  }
  if (y < ySize-1) {
    neighbours.push(grid[coordToIndex(x, y + 1)])
  }
  return neighbours
}

function setStartCell() {
  currX = random(xSize);
  currY = random(ySize);
  let r = random(4);

  if (r === 0) {
    currX = 0;
  } else if (r === 1) {
    currY = 0;
  } else if (r === 2) {
    currX = xSize - 1;
  } else {
    currY = ySize - 1;
  }
}
// prim's algo
function genMaze() {
  grid[coordToIndex(currX, currY)] = new Square(currX, currY);
  neighbours = getNeighbours(currX, currY);
  while (!neighbours.length === 0) {
    currNeighbour = neighbours[random(neighbours.length-1)]
  }
}