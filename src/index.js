import './style.css'
import Gameboard from './components/gameboard'
// import Player from './components/player'
import initialGameSetup from './components/initialGameSetup'

const heroBoard = Gameboard()
const villanBoard = Gameboard()

const heroShips = heroBoard.createShips()
const villanShips = villanBoard.createShips()

// const hero = Player('Mosabbir', heroShips, villanShips, true)
// const villan = Player('Mosarrat', villanShips, heroShips, false)

let playerRandom = heroBoard.assignRandomCoordinates(heroShips)
let villanRandom = villanBoard.assignRandomCoordinates(villanShips)

initialGameSetup(playerRandom, heroBoard, villanRandom, villanBoard)
