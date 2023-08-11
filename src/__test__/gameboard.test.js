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
