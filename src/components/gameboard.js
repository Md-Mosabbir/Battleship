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
  // Todo: Create a function to assign boundary and returns the array.

  function assignBoundary(arr) {
    //* Make a copy of the array
    const array = [...arr]

    //* Iterate over ships for the coordinates and push it to the boundary property
    array.map((ships) => {
      ships.boundary = []
      //* Add boundary around the ships
      // Top
      if (ships.orientation === 'vertical') {
        const bottom = [ships.coordinates[0][0], ships.coordinates[0][1] - 1]
        const top = [
          ships.coordinates[ships.lengthShips - 1][0],
          ships.coordinates[ships.lengthShips - 1][1] + 1,
        ]
        const cornerB1 = [bottom[0] - 1, bottom[1]]
        const cornerB2 = [bottom[0] + 1, bottom[1]]
        const cornerT1 = [top[0] - 1, top[1]]
        const cornerT2 = [top[0] + 1, top[1]]
        ships.boundary.push(bottom, cornerB1, cornerB2, top, cornerT1, cornerT2)

        ships.coordinates.map((coords) =>
          ships.boundary.push(
            coords,
            [coords[0] + 1, coords[1]],
            [coords[0] - 1, coords[1]]
          )
        )
      } else if (ships.orientation === 'horizontal') {
        const left = [ships.coordinates[0][0] - 1, ships.coordinates[0][1]]
        const right = [
          ships.coordinates[ships.lengthShips - 1][0] + 1,
          ships.coordinates[ships.lengthShips - 1][1],
        ]
        const cornerB1 = [left[0], left[1] - 1]
        const cornerB2 = [left[0], left[1] + 1]
        const cornerT1 = [right[0], right[1] - 1]
        const cornerT2 = [right[0], right[1] + 1]
        ships.boundary.push(left, cornerB1, cornerB2, right, cornerT1, cornerT2)

        ships.coordinates.map((coords) =>
          ships.boundary.push(
            coords,
            [coords[0], coords[1] + 1],
            [coords[0], coords[1] - 1]
          )
        )
      }
    })
    return array
  }

  // Todo: assign coordinates
  function setCoordinates(arr, index, x, y) {
    const array = [...arr]
    const ship = array[index]

    const updatedShip = { ...ship, coordinates: [], boundary: [] }

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

  function changeOrientation(arr, i) {
    const array = [...arr]
    const ship = array[i]

    if (ship.orientation === 'vertical') {
      ship.orientation = 'horizontal'
    } else if (ship.orientation === 'horizontal') {
      ship.orientation = 'vertical'
    }

    return array
  }
  function matchBoundary(arr, i) {
    const array = [...arr]
    const ship = array[i]
    for (let ships = 0; ships < array.length; ships++) {
      for (let b = 0; b < array[ships].boundary.length; b++) {
        const coordinate = array[ships].boundary[b]
        const found = ship.coordinates.some(
          (itm) => itm.toString() === coordinate.toString()
        )
        if (found) {
          return true
        }
      }
    }
    return false
  }
  function transgress(arr, i) {
    const array = [...arr]
    const ship = array[i]
    return ship.coordinates.some((coords) => {
      const x = coords[0]
      const y = coords[1]
      return x < 0 || x > 10 || y < 0 || y > 10
    })
  }

  function assignCoordinates(arr, i, x, y) {
    const temporaryChange = setCoordinates([...arr], i, x, y)

    if (
      matchBoundary(temporaryChange, i) === false &&
      transgress(temporaryChange, i) === false
    ) {
      const boundary = assignBoundary(temporaryChange)
      return boundary
    }
    return arr // Return the original array when conditions are met
  }

  function assignOrientation(arr, i) {
    const array = [...arr]
    const temporaryChange = changeOrientation(array, i)
    const ship = temporaryChange[i]
    const anchor = ship.coordinates[0]
    const finalReturn = assignCoordinates(
      temporaryChange,
      i,
      anchor[0],
      anchor[1]
    )

    if (
      matchBoundary(temporaryChange, i) === false &&
      transgress(temporaryChange, i) === false
    ) {
      return finalReturn
    }
    return arr
  }

  // Todo:  Create random coordinate that !match boundaries
  function createRandomCoordinate(arr) {
    const array = [...arr]
    let x
    let y
    let isValid

    do {
      x = Math.floor(Math.random() * 11)
      y = Math.floor(Math.random() * 11)

      // eslint-disable-next-line arrow-body-style, no-loop-func
      isValid = !array.some((ship) => {
        return ship.boundary.some(
          (bCoords) => bCoords[0] === x && bCoords[1] === y
        )
      })
    } while (!isValid)

    return [x, y]
  }

  // Todo: random Orientation

  // Function to get a random orientation

  function randomOrientation(arr) {
    const array = arr.map((ship) => ({ ...ship })) // Create a shallow copy
    const orientations = ['vertical', 'horizontal']

    for (let i = 0; i < array.length; i++) {
      const randomIndex = Math.floor(Math.random() * 2) // Generate 0 or 1
      array[i].orientation = orientations[randomIndex]
    }

    return array
  }

  // Todo: Function to assign random coordinates to all ships

  function setRandomCoordinates(arr) {
    const array = arr.map((ship) => {
      const updatedShip = { ...ship, coordinates: [], boundary: [] }
      const [x, y] = createRandomCoordinate(arr)
      if (ship.orientation === 'vertical') {
        for (let c = 0; c < ship.lengthShips; c++) {
          updatedShip.coordinates.push([x, y + c])
        }
      } else if (ship.orientation === 'horizontal') {
        for (let d = 0; d < ship.lengthShips; d++) {
          updatedShip.coordinates.push([x + d, y])
        }
      }
      return updatedShip
    })

    return array
  }

  function assignRandomCoordinates(arr) {
    const setOrientation = randomOrientation(arr)
    const setCoor = setRandomCoordinates(setOrientation)
    const setBoundary = assignBoundary(setCoor)
    return setBoundary
  }

  // Todo: delete destroyed ship
  function destroyShip(arr) {
    // Use the filter function to remove sunk ships from the array
    const updatedShips = arr.filter((ship) => !ship.isSunk())

    return updatedShips
  }
  // Todo: Missed attack manager

  // Todo: recieveAttack()
  function recieveAttack(arr, x, y, missedArray) {
    const array = [...arr]

    // Check if any ship's coordinate matches (x, y)
    const isMatch = array.find((ship) =>
      ship.coordinates.some((coords) => coords[0] === x && coords[1] === y)
    )

    if (isMatch) {
      // Assuming hit() marks the ship as hit
      isMatch.hit()
      const updatedShips = destroyShip(array, isMatch) // Assuming destroyShip() removes the destroyed ship
      return updatedShips
    }

    // If there is no match, add the missed attack coordinates to the missedArray
    missedArray.push([x, y])

    return array
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

  return {
    createShips,
    assignOrientation,
    assignCoordinates,
    recieveAttack,
    trackShips,
    getShips,
    assignRandomCoordinates,
  }
}

export default Gameboard
