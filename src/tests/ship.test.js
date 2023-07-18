import Ship from '../components/ship'

//Todo: Test for ship creation

describe('Create a Ship', () => {
  let submarine
  beforeAll(() => {
    submarine = Ship(4, 0, false)
  })
  it('Sunks Submarine', () => {
    submarine.hit()
    submarine.hit()
    submarine.hit()
    submarine.hit()
    expect(submarine.isSunk()).toBe(true)
  })
})
