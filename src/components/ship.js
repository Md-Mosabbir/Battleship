function Ship(
  name,
  lengthShips,
  hits = 0,

  sunk = false
) {
  function hit() {
    return ++hits
  }
  function isSunk() {
    if (lengthShips === hits) {
      sunk = true
    }
    return sunk
  }

  return {
    name,
    hit,
    isSunk,
    lengthShips,
    orientation: 'vertical',
    coordinates: [],
    boundary: [],
  }
}

export default Ship
