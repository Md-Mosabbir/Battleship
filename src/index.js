import './style.css'
import Gameboard from './components/gameboard'
import Player from './components/player'
import initialGameSetup from './components/initialGameSetup'

const heroBoard = Gameboard()
const heroShips = heroBoard.createShips()

const villanBoard = Gameboard()
const villanShips = villanBoard.createShips()

const hero = Player('Mosabbir', heroShips, villanShips, true)
const villan = Player('Mosarrat', villanShips, heroShips, false)

let random = heroBoard.assignRandomCoordinates(heroShips)

initialGameSetup(random, heroBoard, heroShips)
