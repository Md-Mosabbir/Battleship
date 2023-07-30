import Gameboard from '../components/gameboard'
let gameboard

// Mock the createRandomCoordinate function to return predictable values for testing
beforeAll(() => {
  gameboard = Gameboard()
})

describe('Assiging coordintes and Boundaries: Random and indivitual ', () => {
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
  it('Giving random Coorinates to Ships', () => {})
})
