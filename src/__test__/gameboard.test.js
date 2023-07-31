import Gameboard from '../components/gameboard'
let gameboard

// Mock the createRandomCoordinate function to return predictable values for testing
beforeAll(() => {
  gameboard = Gameboard()
})

describe('Assiging coordintes and Boundaries: indivitual ', () => {
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
    const ship = [
      {
        name: 'Submarine ',
        coordinates: [],
        lengthShips: 2,
        boundary: [],
        orientation: 'vertical',
      },
      {
        name: 'Speed-Boat',
        coordinates: [[7, 7]],
        lengthShips: 1,
        boundary: [],
        orientation: 'vertical',
      },
    ]

    const assign = gameboard.assignCoordinates(ship, 0, 1, 5)

    const coor = [
      [1, 5],
      [1, 6],
    ]
    expect(assign[0].coordinates).toEqual(coor)
    expect(assign[1].coordinates).toEqual([[7, 7]])
  })
})
