import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { range, each, delay } from 'lodash'
import { getRandom } from 'utils/helpers'

import Button from 'components/Button'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;`

const Board = styled.div`
  margin: 20px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);`

const colorAnim = keyframes`
  0% { opacity: 1; }
  50% { opacity: .5 }
  100% { opacity: 1 }`

const Box = styled.div`
  background: ${props => props.color};
  width: 200px;
  height: 200px;
  cursor: pointer;
  &:hover{
    border: 4px solid #68cbf7;
    width: 192px;
    height: 192px;
  }
  &.animate{
    animation: ${colorAnim} .6s ease;
  }`

const Header = styled.div`
  display: flex;
  margin: 20px auto;
  height: 38px;`

const Round = styled.p`
  font-size: 40px;
  line-height: 40px;
  margin: 15px auto;`

const GameOver = styled.p`
  font-size: 22px;
  padding-top: 10px;
  width: 310px;`

const HelpText = styled.p`
  font-size: 22px;
  margin: 0 auto;`

const colors = ["#262525", "#ff9900", "#37f194", "#ce60c3"]

const generateCode = round => {
  const amount = (round * 2)

  return range(amount).map(() => colors[getRandom(0, colors.length - 1)])
}

export default function Simon(){
  const startRound = 1
  const [round, setRound] = useState(startRound)
  const [code, setCode] = useState(generateCode(round))
  const [guess, setGuess] = useState([])
  const [gameLost, setGameLost] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  const startGame = () => {
    setGuess([])
    setRound(startRound)
    setCode(generateCode(startRound))
    setGameLost(false)
    setHasPlayed(false)
  }

  const newLevel = () => {
    const newRound = round + 1
    setGuess([])
    setRound(newRound)
    setCode(generateCode(newRound))
    setHasPlayed(false)
  }

  const animate = (color, idx = 0) => {
    const addClass = () => document.getElementById("color-" + color).classList.add("animate")
    const removeClass = () => document.getElementById("color-" + color).classList.remove("animate")

    delay(addClass, (idx === 0 ? 0 : 600 * idx))
    delay(removeClass, (600 * idx) + 300)
  }

  const playCode = () => {
    each(code, (color, idx) => {
      animate(color, idx)
    })

    delay(() => {
      setHasPlayed(true)
    }, (600 * code.length - 1) + 300)
  }

  const handleGuess = color => {
    if(gameLost || !hasPlayed) return

    animate(color)
    const newGuess = guess.concat(color)

    if(newGuess[guess.length - 1] !== code[guess.length - 1]) setGameLost(true)
    else if(newGuess.length === code.length) newLevel()
    else setGuess(newGuess)
  }

  const boxes = colors.map(color => <Box key={color} id={"color-" + color}
    onClick={() => handleGuess(color)} color={color} />)

  const gameOver = gameLost && <GameOver>Game over! You failed round {round}.</GameOver>
  const gameLostButton = gameLost && <Button onClick={() => startGame()}>New game</Button>
  const playCodeButton = !hasPlayed && !gameLost && <Button onClick={() => playCode()}>Simon says what?</Button>
  const helpText = hasPlayed && !gameLost && <HelpText>Clicks left: {code.length - guess.length}</HelpText>

  return <Page>
    <Header>
      {gameOver}
      {helpText}
      {gameLostButton}
      {playCodeButton}
    </Header>
    <Board>
      {boxes}
    </Board>
    <Round>Round: {round}</Round>
  </Page>
}
