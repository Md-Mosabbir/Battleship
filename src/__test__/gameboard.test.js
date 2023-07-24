import Gameboard from '../components/gameboard'
let gameboard
let shipsCreated
let updatedShips
let missedArray

beforeAll(() => {
  missedArray = []
  gameboard = Gameboard()
  shipsCreated = gameboard.createShips()

  updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)
})
describe('Tests for assigning Coordinates and Ship intregation', () => {
  it('Check for assigning creation', () => {
    expect(updatedShips[0].coordinates).toEqual([
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
    ])
  })
  it('Does not change other ships', () => {
    expect(updatedShips[1].coordinates).toEqual([0, 0])
  })
})

describe('Recieving attack', () => {
  it('Attacks a vertical ship', () => {
    const ships = gameboard.assignCoordinates(shipsCreated, 4, 2, 3)

    gameboard.recieveAttack(ships, 2, 3, missedArray)
    gameboard.recieveAttack(ships, 2, 4, missedArray)

    expect(ships[4].isSunk()).toBe(true)
  })
  it('Misses an attack on a ship', () => {
    const missed = [[5, 5]]

    const result = gameboard.recieveAttack(updatedShips, 5, 5, missedArray)

    expect(result.missed).toEqual(missed)
  })
  it('Misses multiple array', () => {
    const secondMissed = [
      [5, 5],
      [10, 10],
    ]

    let result = gameboard.recieveAttack(updatedShips, 5, 5, missedArray)
    result = gameboard.recieveAttack(updatedShips, 10, 10, result.missed)
    expect(result.missed).toEqual(secondMissed)
  })
})
