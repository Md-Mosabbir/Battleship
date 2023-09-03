import './style.css'
import Gameboard from './components/gameboard'
import gameOver from './components/gameOver'

import initialGameSetup from './components/initialGameSetup'

const heroBoard = Gameboard()
const villanBoard = Gameboard()

const heroShips = heroBoard.createShips()
const villanShips = villanBoard.createShips()

let playerRandom = heroBoard.assignRandomCoordinates(heroShips)
let villanRandom = villanBoard.assignRandomCoordinates(villanShips)

initialGameSetup(playerRandom, heroBoard, villanRandom, villanBoard)
