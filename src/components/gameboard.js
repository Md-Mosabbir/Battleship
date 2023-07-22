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

    array[index].coordinates[0] = x
    array[index].coordinates[1] = y

    return array
  }

  // Todo: recieveAttack()
  // Todo: give length to ship within the board
  // Todo: delete destroyed ship
  // Todo: track destroyed ship
  // Todo: record missed attack
}

export default Gameboard
