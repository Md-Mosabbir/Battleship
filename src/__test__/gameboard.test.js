import Gameboard from '../components/gameboard'
import Ship from '../components/ship'
describe('Tests for Gameboard and Ship intregation', () => {
  let gameboard
  let shipsCreated
  beforeAll(() => {
    gameboard = Gameboard()
    shipsCreated = gameboard.createShips()
  })
  it('Check for assigning creation', () => {
    gameboard.assignCoordinates(shipsCreated, 4, 2, 3)
    gameboard.assignCoordinates(shipsCreated, 1, 2, 5)

    expect(shipsCreated[1].coordinates).toEqual([2, 5])
    expect(shipsCreated[4].coordinates).toEqual([2, 3])
  })
})
