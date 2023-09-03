import './style.css'
import Gameboard from './components/gameboard'

import initialGameSetup from './components/initialGameSetup'

const heroBoard = Gameboard()
const villanBoard = Gameboard()

const heroShips = heroBoard.createShips()
const villanShips = villanBoard.createShips()

// eslint-disable-next-line prefer-const
let playerRandom = heroBoard.assignRandomCoordinates(heroShips)
// eslint-disable-next-line prefer-const
let villanRandom = villanBoard.assignRandomCoordinates(villanShips)

initialGameSetup(playerRandom, heroBoard, villanRandom, villanBoard)
