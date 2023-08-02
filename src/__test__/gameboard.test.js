import Gameboard from '../components/gameboard'
import Ship from '../components/ship'

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

describe('Test random coordinates', () => {
  let mockMathRandom
  let ship

  beforeEach(() => {
    ship = [
      {
        name: 'Submarine ',
        coordinates: [],
        lengthShips: 2,
        boundary: [],
        orientation: 'vertical',
      },
      {
        name: 'Speed-Boat',
        coordinates: [],
        lengthShips: 1,
        boundary: [],
        orientation: 'horizontal',
      },
    ]
  })

  afterEach(() => {
    mockMathRandom.mockRestore()
  })

  it('assigns random coords', () => {
    mockMathRandom = jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.7)

    const assignCoordinatesRandom = gameboard.assignRandomCoordinates(ship)

    // length
    expect(assignCoordinatesRandom[0].coordinates).toHaveLength(2)
    expect(assignCoordinatesRandom[1].coordinates).toHaveLength(1)

    // x and y
    expect(assignCoordinatesRandom[0].coordinates).toEqual([
      [8, 9],
      [9, 9],
    ])

    expect(assignCoordinatesRandom[1].coordinates).toEqual([[6, 7]])
  })

  it('check assigned boundary', () => {
    mockMathRandom = jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.7)

    const assignCoordinatesRandom = gameboard.assignRandomCoordinates(ship)

    expect(assignCoordinatesRandom[0].boundary).toHaveLength(12)
    expect(assignCoordinatesRandom[1].boundary).toHaveLength(9)
  })

  it('Assign random coordinates multiple times', () => {
    mockMathRandom = jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.7)

    const assignCoordinatesRandom = gameboard.assignRandomCoordinates(ship)
    const secondRandom = gameboard.assignRandomCoordinates(
      assignCoordinatesRandom
    )

    expect(secondRandom[0].boundary).toHaveLength(12)
    expect(secondRandom[1].boundary).toHaveLength(9)
  })
})

describe('Attack on ship', () => {
  let missedArray
  let array

  beforeEach(() => {
    missedArray = []
    const ship = Ship('Pseudo-Ship', 1)
    ship.coordinates.push([1, 2])
    const submarine = Ship('Pseudo-Submarine', 2)
    submarine.coordinates.push([5, 5], [5, 6])

    array = [ship, submarine]
  })
  it('Recieves and attack and destroyes the ship', () => {
    const attack = gameboard.recieveAttack(array, 1, 2, missedArray)
    expect(attack).toHaveLength(1)
    expect(attack[0].name).toBe('Pseudo-Submarine')
  })
  it('Misses  attacks', () => {
    const attack = gameboard.recieveAttack(array, 10, 10, missedArray)
    expect(attack).toHaveLength(2)
    expect(missedArray).toEqual([[10, 10]])
    const attackTwo = gameboard.recieveAttack(attack, 0, 0, missedArray)
    expect(missedArray).toEqual([
      [10, 10],
      [0, 0],
    ])
  })
  it('Destroys all ships', () => {
    let attack = gameboard.recieveAttack(array, 1, 2, missedArray)
    attack = gameboard.recieveAttack(array, 5, 6, missedArray)
    attack = gameboard.recieveAttack(array, 5, 5, missedArray)

    expect(missedArray).toHaveLength(0)
    expect(attack).toHaveLength(0)
    expect(gameboard.trackShips(attack)).toBeTruthy()
  })
})
