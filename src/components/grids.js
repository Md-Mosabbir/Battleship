// A  function creating grid of 10 x 10
function createGrid(idOfBoard) {
  const board = document.getElementById(idOfBoard)
  //* container fo  ABCDEFJ
  const letterDiv = document.createElement('div')
  letterDiv.classList.add('all-letters')

  const letters = 'ABCDEFGHIJ'
  const lettersArray = letters.split('')
  lettersArray.forEach((letter) => {
    const displayLetter = document.createElement('div')
    displayLetter.classList.add('letter')
    displayLetter.textContent = letter
    letterDiv.appendChild(displayLetter)
  })
  board.appendChild(letterDiv)

  //* Two  and grid + numbers
  const content = document.createElement('div')
  content.classList.add('number-and-grid')

  // numbers

  const numbers = document.createElement('div')
  numbers.classList.add('all-numbers')

  for (let number = 9; number > -1; number--) {
    const displayNumber = document.createElement('div')
    displayNumber.classList.add('number')
    displayNumber.textContent = number
    numbers.appendChild(displayNumber)
  }
  content.appendChild(numbers)

  // grid
  const grid = document.createElement('div')
  grid.classList.add('grid')
  grid.id = `${idOfBoard}-grid`
  grid.style.position = 'relative'

  for (let y = 9; y > -1; y--) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.setAttribute('data-x', x)
      cell.setAttribute('data-y', y)
      grid.appendChild(cell)
    }
  }
  content.appendChild(grid)

  board.appendChild(content)
}

export default createGrid
