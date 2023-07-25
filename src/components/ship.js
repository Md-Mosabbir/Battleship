function Ship(
  name,
  lengthShips,
  hits = 0,
  orientation = 'vertical',
  sunk = false
) {
  function hit() {
    return hits++
  }
  function isSunk() {
    if (lengthShips === hits) {
      sunk = true
    }
    return sunk
  }
  function changeOrinetation() {
    if (orientation === 'vertical') {
      return (orientation = 'horizontal')
    }
    return (orientation = 'vertical')
  }
  return {
    hit,
    isSunk,
    changeOrinetation,
    lengthShips,
    orientation,
    coordinates: [0, 0],
  }
}

export default Ship
