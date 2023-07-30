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
  it('Check for assigning coordinates', () => {
    expect(updatedShips[0].coordinates).toEqual([
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
    ])
  })
  it('Does not change other ships', () => {
    expect(updatedShips[1].coordinates).toEqual([])
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
    expect(getShip4).toEqual([])
  })
  it('Assign a horizontal coordinate', () => {
    const horizontalShip = gameboard.changeOrientation(updatedShips, 3)
    const horizonCoor = gameboard.assignCoordinates(horizontalShip, 3, 6, 6)
    const expected = horizonCoor[3].coordinates

    const toBe = [
      [6, 6],
      [7, 6],
      [8, 6],
    ]
    expect(expected).toEqual(toBe)
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
  it('test for trackShip', () => {
    const arr = []

    const result = gameboard.trackShips(arr)

    expect(result).toEqual(true)
  })
  it('test for getShips', () => {
    const array = [1, 2, 3, 4]
    const result = gameboard.getShips(array)
    expect(result).toEqual(4)
  })
})

describe('Play a complete game by assigning and destroying ships', () => {
  let shipsCreated
  let updatedShips
  let missedArray
  beforeEach(() => {
    shipsCreated = gameboard.createShips()
    updatedShips = gameboard.assignCoordinates(shipsCreated, 0, 2, 3)
    updatedShips = gameboard.assignCoordinates(updatedShips, 1, 5, 3)
    updatedShips = gameboard.assignCoordinates(updatedShips, 2, 7, 3)
    updatedShips = gameboard.assignCoordinates(updatedShips, 3, 9, 3)
    updatedShips = gameboard.assignCoordinates(updatedShips, 4, 11, 3)
    missedArray = []
  })
  it('Play a complete game', () => {
    const miss = [
      [5, 10],
      [5, 8],
    ]
    let attack = gameboard.recieveAttack(updatedShips, 2, 3, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 2, 4, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 2, 5, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 2, 6, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 2, 7, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 5, 3, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 5, 4, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 5, 5, missedArray)
    //Misses 2 attack
    attack = gameboard.recieveAttack(updatedShips, 5, 10, missedArray)
    attack = gameboard.recieveAttack(updatedShips, 5, 8, attack.missed)

    attack = gameboard.recieveAttack(updatedShips, 5, 6, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 7, 3, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 7, 4, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 7, 5, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 9, 3, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 9, 4, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 9, 5, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 11, 3, attack.missed)
    attack = gameboard.recieveAttack(updatedShips, 11, 4, attack.missed)

    expect(gameboard.trackShips(attack.ships)).toBe(true)
    expect(attack.missed).toEqual(miss)
  })
})

// Mock the createRandomCoordinate function to return predictable values for testing
