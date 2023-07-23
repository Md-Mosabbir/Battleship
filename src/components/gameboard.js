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

    if (ship.orientation === 'vertical') {
      for (let c = 0; c < ship.lengthShips; c++) {
        ship.coordinates.push([x, y + c])
      }
    } else if (ship.orientation === 'horizontal') {
      for (let c = 0; c < ship.lengthShips; c++) {
        ship.coordinates.push([x + c, y])
      }
    }

    return array
  }

  // Todo: recieveAttack()
  function recieveAttack(arr, x, y) {
    const array = [...arr]
    const missed = []

    //* Match if array's coordinate matches x and y
    const isMatch = array.find((ship) =>
      ship.coordinates.some((coords) => coords[0] === x && coords[1] === y)
    )

    if (isMatch) {
      isMatch.hit()
      return true
    }
    if (!isMatch) {
      missed.push([x, y])
      return false
    }
  }

  // Todo: delete destroyed ship
  // Todo: track destroyed ship

  return { createShips, assignCoordinates, recieveAttack }
}

export default Gameboard
