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

  // Todo: give length to ship within the board
  function getAllShipSquares(arr) {
    const array = [...arr]
    const getShipsCoor = []

    //* Segragate vertical and horizontal ships
    for (let i = 0; i < array.length; i++) {
      if (array[i].orientation === 'vertical') {
        for (let y = 0; y < array[i].lengthShip; y++) {
          getShipsCoor.push([
            array[i].coordinates[0],
            array[i].coordinates[1] + y,
          ])
        }
      } else if (array[i].orientation === 'horizontal') {
        for (
          let x = array[i].coordinates[0];
          x <= array[i].lengthShip + array[i].coordinates[0];
          x++
        ) {
          getShipsCoor.push([
            array[i].coordinates[0] + x,
            array[i].coordinates[1],
          ])
        }
      }
    }
    return getShipsCoor
  }

  // Todo: recieveAttack()
  function recieveAttack(arr, x, y) {
    const array = [...arr]
    const missed = []

    const isMatch = getAllShipSquares(array).some(
      ([targetX, targetY]) => targetX === x && targetY === y
    )

    if (isMatch) {
      const matchShip = array.find(
        ({ coordinates }) => coordinates[0] === x && coordinates[1] === y
      )
      if (matchShip) {
        matchShip.hit()
        return true
      }
    }
    if (!isMatch) {
      missed.push([x, y])
      return false
    }
  }

  // Todo: delete destroyed ship
  // Todo: track destroyed ship
  // Todo: record missed attack

  return { createShips, assignCoordinates, recieveAttack }
}

export default Gameboard
