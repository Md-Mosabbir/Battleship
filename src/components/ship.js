function Ship(name, length, hits = 0, sunk = false) {
  function hit() {
    return hits++
  }
  function isSunk() {
    if (length === hits) {
      sunk = true
    }
    return sunk
  }
  return { hit, isSunk, orientation: 'vertical', coordinates: [0, 0] }
}

export default Ship
