import Ship from './ship'

function Gameboard() {
  // Todo: Create a function to push 5 ships and returns the array.

  function createShips() {
    const ships = []
    ships.push(Ship('Aircraft Carrier', 5))
    ships.push(Ship('Battleship', 4))
    ships.push(Ship('Submarine', 3))
    ships.push(Ship('Cruiser', 3))
    ships.push(Ship('Destroyer', 2))

    return ships
  }
  // Todo: assign coordinates
  function assignCoordinates(arr, index, x, y) {
    const array = [...arr]
    const ship = array[index]
    ship.coordinates = [] // Empty the coordinates array

    const updatedShip = { ...ship, coordinates: [] }

    if (ship.orientation === 'vertical') {
      for (let c = 0; c < ship.lengthShips; c++) {
        updatedShip.coordinates.push([x, y + c])
      }
    } else if (ship.orientation === 'horizontal') {
      for (let d = 0; d < ship.lengthShips; d++) {
        updatedShip.coordinates.push([x + d, y])
      }
    }
    array[index] = updatedShip
    return array
  }

  // Todo: delete destroyed ship
  function destroyShip(arr) {
    // Use the filter function to remove sunk ships from the array
    const updatedShips = arr.filter((ship) => !ship.isSunk())

    return updatedShips
  }

  // Todo: recieveAttack()
  function recieveAttack(arr, x, y, missedArray) {
    const array = [...arr]
    const missed = [...missedArray]

    // Check if any ship's coordinate matches (x, y)
    const isMatch = array.find((ship) =>
      ship.coordinates.some((coords) => coords[0] === x && coords[1] === y)
    )
    if (isMatch) {
      isMatch.hit()

      const updatedShips = destroyShip(array)
      return { ships: updatedShips, missed }
    }
    const updateMissed = [...missed, [x, y]]
    return { ships: array, missed: updateMissed }
  }

  // Todo: track destroyed ship
  function trackShips(arr) {
    const array = [...arr]

    if (array.length === 0) {
      return true
    }
  }
  function getShips(arr) {
    return [...arr].length
  }

  function changeOrientation(arr, i) {
    const array = [...arr]
    const ship = array[i]

    if (ship.orientation === 'vertical') {
      ship.orientation = 'horizontal'
    } else {
      ship.orientation = 'vertical'
    }

    return array
  }

  return {
    createShips,
    changeOrientation,
    assignCoordinates,
    recieveAttack,
    trackShips,
    getShips,
  }
}

export default Gameboard
