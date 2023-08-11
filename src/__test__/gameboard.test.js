import Gameboard from '../components/gameboard'
import Ship from '../components/ship'

let gameboard
let testingShips
// Mock the createRandomCoordinate function to return predictable values for testing
beforeAll(() => {
  gameboard = Gameboard()
})

beforeEach(() => {
  testingShips = gameboard.createShips()
})

describe('Test for creating 5 ships', () => {
  it('Creates 5 ships', () => {
    expect(testingShips).toHaveLength(5)

    testingShips.forEach((createShips) => {
      expect(createShips.coordinates).toEqual([])
      expect(createShips.boundary).toEqual([])
    })
  })
})

describe('Change Orientaion of ships', () => {
  let ships
  beforeEach(() => {
    const submarine = Ship('Submarine', 3)
    submarine.coordinates.push([2, 3], [2, 4], [2, 5])
    const aircraftCarrier = Ship('Aircraft-Carrier', 2)
    aircraftCarrier.coordinates.push([5, 3], [5, 4])
    aircraftCarrier.boundary.push([5, 3], [4, 4], [5, 4])
    const boat = Ship('Boat', 3)
    boat.coordinates.push([3, 4], [3, 5], [3, 6])
    ships = [submarine, aircraftCarrier, boat]
  })
  it('change orientation to one ship', () => {
    const changedOrientation = gameboard.assignOrientation(ships, 0)

    expect(changedOrientation[0].orientation).toBe('horizontal')
    const returnToOriginal = gameboard.assignOrientation(changedOrientation, 0)

    expect(returnToOriginal[0].orientation).toBe('vertical')
    expect(returnToOriginal[0].coordinates).toEqual([
      [2, 3],
      [2, 4],
      [2, 5],
    ])
  })

  it('Does not assign Orientation due to crossing boundary', () => {
    const notAssignOrientation = gameboard.assignOrientation(ships, 2)

    expect(notAssignOrientation[2].orientation).toBe('vertical')
    expect(notAssignOrientation[2].coordinates).toEqual([
      [3, 4],
      [3, 5],
      [3, 6],
    ])
  })
})

describe('Assign Coordinates to ship', () => {
  it('Assigns coordinates to 5th ship', () => {
    const destroyer = gameboard.assignCoordinates(testingShips, 4, 4, 5)

    const coords = [
      [4, 5],
      [4, 6],
    ]

    expect(destroyer[4].coordinates).toEqual(coords)
    expect(destroyer[4].boundary).toHaveLength(12)
    expect(destroyer[1].coordinates).toEqual([])
  })
  it('Assigns coordinates to two ships', () => {
    let duo = gameboard.assignCoordinates(testingShips, 4, 6, 7)
    duo = gameboard.assignCoordinates(duo, 3, 1, 6)
    const coordsFifth = [
      [6, 7],
      [6, 8],
    ]
    const coordsFourth = [
      [1, 6],
      [1, 7],
      [1, 8],
    ]

    expect(duo[4].coordinates).toEqual(coordsFifth)

    expect(duo[3].coordinates).toEqual(coordsFourth)
    expect(duo[1].coordinates).toEqual([])
  })

  it('Does not assign coordinates to ships due to TRANSGRESSION', () => {
    const transgress = gameboard.assignCoordinates(testingShips, 0, 5, 9)
    expect(transgress[0].coordinates).toEqual([])

    let twoTurns = gameboard.assignCoordinates(testingShips, 0, 1, 1)

    twoTurns = gameboard.assignCoordinates(twoTurns, 0, 9, 9)

    const coors = [
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ]

    expect(twoTurns[0].coordinates).toEqual(coors)
  })
})
