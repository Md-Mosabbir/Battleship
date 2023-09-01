function gameOver(player, computer) {
  //* Use the player.gameover() for if statement

  function content(person) {
    const gameoverContainer = document.createElement('div')
    gameoverContainer.id = 'gameover'

    gameoverContainer.setAttribute(
      'style',
      'position: absolute; width: 100%; height: 100vh; z-index: 5;'
    )
    const winnerHeader = document.createElement('h1')

    winnerHeader.textContent = 'Gameover'

    const winnerName = document.createElement('p')
    winnerName.textContent = `${person.name} is the Winner!`

    gameoverContainer.appendChild(winnerHeader)
    gameoverContainer.appendChild(winnerName)
    document.body.appendChild(gameoverContainer)
  }
  if (player.gameOver() === true) {
    content(player)
  } else if (computer.gameOver() === true) {
    content(computer)
  }

  //* create the ui with retry and new game button
}

export default gameOver
