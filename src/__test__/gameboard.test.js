import Gameboard from '../components/gameboard'
let gameboard

// Mock the createRandomCoordinate function to return predictable values for testing
beforeAll(() => {
  gameboard = Gameboard()
})

describe('Assiging coordintes and Boundaries: indivitual ', () => {
  let ship
  beforeEach(() => {
    ship = [
      {
        name: 'Submarine ',
        coordinates: [
          [1, 5],
          [1, 6],
        ],
        lengthShips: 2,
        boundary: [],
        orientation: 'vertical',
      },
      {
        name: 'Speed-Boat',
        coordinates: [[7, 7]],
        lengthShips: 1,
        boundary: [],
        orientation: 'horizontal',
      },
    ]
  })
  // Todo: Moving the ships here and there while checking boundaries
  it('Creates five ships', () => {
    const ships = gameboard.createShips()
    expect(ships.length).toBe(5)
    expect(Array.isArray(ships)).toBe(true)

    ships.forEach((ship) => {
      expect(ship).toHaveProperty('boundary')
      expect(ship.coordinates).toEqual([])
      expect(ship.boundary).toEqual([])
    })
  })

  it('Assign Coordinates on a ship', () => {
    const assign = gameboard.assignCoordinates(ship, 0, 1, 5)

    const coor = [
      [1, 5],
      [1, 6],
    ]
    expect(assign[0].coordinates).toEqual(coor)
    expect(assign[1].coordinates).toEqual([[7, 7]])
  })
  it('Changes orientation on a ship', () => {
    const changeOrientation = gameboard.assignOrientation(ship, 0)

    expect(changeOrientation[0].orientation).toEqual('horizontal')
    expect(changeOrientation[1].orientation).toEqual('horizontal')
  })
  it('Changes orientation on a horizontal ship', () => {
    let orientation = gameboard.assignOrientation(ship, 1)

    expect(orientation[0].orientation).toEqual('vertical')
    expect(orientation[1].coordinates).toEqual([[7, 7]])
  })
  it('Changes orientation on a ship twice', () => {
    const coords = [
      [1, 5],
      [1, 6],
    ]
    let changeOrientation = gameboard.assignOrientation(ship, 0)
    changeOrientation = gameboard.assignOrientation(ship, 0)
    expect(changeOrientation[0].coordinates).toEqual(coords)
  })
  it('Does not assign Coordinates', () => {
    const testShip = [
      {
        name: 'Submarine ',
        coordinates: [[0, 0]],
        lengthShips: 2,
        boundary: [],
        orientation: 'vertical',
      },
      {
        name: 'Boat ',
        coordinates: [[0, 0]],
        lengthShips: 1,
        boundary: [],
        orientation: 'vertical',
      },
    ]
    const coorZero = [
      [1, 5],
      [1, 6],
    ]
    let overlap = gameboard.assignCoordinates(testShip, 0, 1, 5)
    overlap = gameboard.assignCoordinates(overlap, 1, 7, 7)
    overlap = gameboard.assignCoordinates(overlap, 1, 1, 5)
    overlap = gameboard.assignCoordinates(overlap, 0, 1, 5)
    let trasngress = gameboard.assignCoordinates(overlap, 0, 11, 11)
    trasngress = gameboard.assignCoordinates(overlap, 0, 0, 11)

    expect(overlap[1].coordinates).toEqual([[7, 7]])
    expect(overlap[0].coordinates).toEqual(coorZero)
    expect(trasngress[0].coordinates).toEqual(coorZero)
    expect(trasngress[1].coordinates).toEqual([[7, 7]])
  })
  it('Does not assign Orientation', () => {
    const coors = [
      [5, 7],
      [5, 8],
    ]
    const coorsT = [
      [10, 9],
      [10, 10],
    ]
    let assingNextToAShip = gameboard.assignCoordinates(ship, 0, 5, 7)

    let changeNot = gameboard.assignOrientation(assingNextToAShip, 0)

    const assignToCorner = gameboard.assignCoordinates(ship, 0, 10, 9)
    const notTransgressRotate = gameboard.assignOrientation(assignToCorner, 0)

    expect(assingNextToAShip[0].coordinates).toEqual(coors)
    expect(changeNot[0].coordinates).toEqual(coors)
    expect(changeNot[1].coordinates).toEqual([[7, 7]])
    expect(assignToCorner[0].coordinates).toEqual(coorsT)
    expect(notTransgressRotate[0].coordinates).toEqual(coorsT)
    expect(notTransgressRotate[1].coordinates).toEqual([[7, 7]])
  })
})

describe('Recieve Attack upon ships and destroy', () => {
  let ship
  beforeEach(() => {
    const missedArray = []
    ship = [
      {
        name: 'Submarine ',
        coordinates: [
          [1, 5],
          [1, 6],
        ],
        lengthShips: 2,
        boundary: [],
        orientation: 'vertical',
      },
      {
        name: 'Speed-Boat',
        coordinates: [[7, 7]],
        lengthShips: 1,
        boundary: [],
        orientation: 'horizontal',
      },
    ]
  })

  it('Attacks a ship', () => {
    const attack = gameboard.recieveAttack(ship, 7, 7)
  })
})
