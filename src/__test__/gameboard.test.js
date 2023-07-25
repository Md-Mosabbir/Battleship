import Gameboard from '../components/gameboard'
let gameboard

beforeAll(() => {
  gameboard = Gameboard()
})
describe('Tests for assigning Coordinates and Ship intregation', () => {
  let shipsCreated
  let updatedShips
  beforeEach(() => {
    shipsCreated = gameboard.createShips()

    updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)
  })
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
  it('5 ships are created', () => {
    expect(shipsCreated.length).toBe(5)
  })
  it('Assign multiple coordinates', () => {
    const ship2 = gameboard.assignCoordinates(updatedShips, 2, 0, 9)
    gameboard.assignCoordinates(shipsCreated, 1, 4, 10)

    const getShip2 = ship2[2].coordinates
    const getShip4 = ship2[4].coordinates
    const ship2Coor = [
      [0, 9],
      [0, 10],
      [0, 11],
    ]
    expect(getShip2).toEqual(ship2Coor)
    expect(getShip4).toEqual([0, 0])
  })
})

describe('Recieving attack', () => {
  let shipsCreated
  let updatedShips
  let missedArray
  beforeEach(() => {
    shipsCreated = gameboard.createShips()

    updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)
    missedArray = []
  })
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
  it('Destroy A Ship', () => {
    const ships = gameboard.assignCoordinates(shipsCreated, 4, 2, 3)
    let result = gameboard.recieveAttack(ships, 2, 3, missedArray)
    result = gameboard.recieveAttack(ships, 2, 4, missedArray)

    expect(result.ships.length).toBe(4)
  })
})
