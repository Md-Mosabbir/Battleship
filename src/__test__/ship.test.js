import Ship from '../components/ship'

//Todo: Test for ship creation

describe('Create a Ship', () => {
  let submarine
  beforeAll(() => {
    submarine = Ship(4)
  })

  it('Checks all the properties of Ship', () => {
    expect(submarine).toBeDefined()
    expect(submarine.isSunk()).toEqual(false)
    expect(submarine.orientation).toMatch('vertical')
    expect(submarine.coordinates).toEqual([])
  })

  it('Check wether ships gets hit', () => {
    submarine.hit()
    submarine.hit()
    submarine.hit()
    submarine.hit()
    expect(submarine.isSunk()).toEqual(true)
  })
})
