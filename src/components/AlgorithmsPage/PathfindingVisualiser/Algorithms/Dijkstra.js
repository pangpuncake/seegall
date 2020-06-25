export function dijkstra(grid, startNode, finishNode) {
  const orderedVisitedNodes = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode.isWall) {
      continue;
    }
    if (closestNode.distance === Infinity) {
      return orderedVisitedNodes;
    }
    closestNode.isVisited = true;
    orderedVisitedNodes.push(closestNode);
    if (closestNode === finishNode) {
      return orderedVisitedNodes;
    }
    updateUnvisited(closestNode, grid);
  }
}

function updateUnvisited(node, grid) {
  const unvisitedNeighbours = getUnvisited(node, grid);
  for (const neighbour of unvisitedNeighbours) {
    neighbour.distance = node.distance + 1;
    neighbour.previousNode = node;
  }
}

function getUnvisited(node, grid) {
  const neighbours = [];
  const { col, row } = node;
  if (row > 0) {
    neighbours.push(grid[row - 1][col]);
  }
  if (row < grid.length - 1) {
    neighbours.push(grid[row + 1][col]);
  }
  if (col > 0) {
    neighbours.push(grid[row][col - 1]);
  }
  if (col < grid[0].length - 1) {
    neighbours.push(grid[row][col + 1]);
  }
  return neighbours.filter((neighbour) => !neighbour.isVisited);
}

function sortByDistance(unvisitedNodes) {
  unvisitedNodes.sort((node1, node2) => node1.distance - node2.distance);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

export function shortestPath(finishNode) {
  const shortestPathNodes = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    shortestPathNodes.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return shortestPathNodes;
}
