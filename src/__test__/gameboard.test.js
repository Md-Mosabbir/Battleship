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
    changeOrientation = gameboard.assignOrientation(changeOrientation, 0)

    expect(changeOrientation[0].orientation).toBe('vertical')
    expect(changeOrientation[0].coordinates).toEqual(coords)
  })
})
