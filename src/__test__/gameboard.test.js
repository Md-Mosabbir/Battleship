import Gameboard from '../components/gameboard'
let gameboard
let shipsCreated
beforeAll(() => {
  gameboard = Gameboard()
  shipsCreated = gameboard.createShips()
})
describe('Tests for assigning Coordinates and Ship intregation', () => {
  it('Check for assigning creation', () => {
    const updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)
    expect(updatedShips[0].coordinates).toEqual([
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
    ])
  })
  it('Does not change other ships', () => {
    const updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)
    expect(updatedShips[1].coordinates).toEqual([0, 0])
  })
})

describe('Recieving attack', () => {
  it('Attacks a ship', () => {
    const updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)

    const successfulAttack = gameboard.recieveAttack(updatedShips, 2, 3)

    expect(successfulAttack).toBe(true)
  })
  it('Misses an attack on a ship', () => {
    const updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)

    const faliedAttack = gameboard.recieveAttack(updatedShips, 2, 0)

    expect(faliedAttack).toBe(false)
  })
})
