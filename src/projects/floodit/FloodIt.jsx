import { useState } from 'react'
import styled from 'styled-components'
import { initBoard, mergeNeighbours, updateColor, checkGameWon } from './utils'

import Button from 'components/Button'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  width: 420px;`

const Board = styled.div`
  margin: 20px auto;`

const Row = styled.div`
  display: flex;`

const Column = styled.div`
  background: ${props => props.color};
  width: 30px;
  height: 30px;
  cursor:pointer;`

const MovesLeft = styled.p`
  font-size: 40px;
  line-height: 40px;
  margin: 15px auto;`

const GameOver = styled.p`
  font-size: 22px;
  padding-top: 10px;
  width: 310px;`

export default function FloodIt() {
  const totalMoves = 25
  const [board, setBoard] = useState(initBoard())
  const [movesLeft, setMovesLeft] = useState(totalMoves)
  const [gameLost, setGameLost] = useState(false)
  const [gameWon, setGameWon] = useState(false)

  const newGame = () => {
    setGameLost(false)
    setGameWon(false)
    setMovesLeft(totalMoves)
    setBoard(initBoard())
  }

  const handleColor = color => {
    if(!gameWon && !gameLost){
      let newBoard = updateColor(board, color)
      newBoard = mergeNeighbours(newBoard, color)

      setBoard(newBoard)
      setMovesLeft(movesLeft - 1)

      const playerWon = checkGameWon(newBoard)
      setGameWon(playerWon)

      const gameLost = (movesLeft - 1 === 0) && playerWon === false
      setGameLost(gameLost)
    }
  }

  const boardMarkup = board.map((row, rowIdx) => {
    const columns = row.map((col, colIdx) => {
      return <Column key={colIdx} color={col.color} onClick={() => handleColor(col.color)}></Column>
    })

    return <Row key={rowIdx}>{columns}</Row>
  })

  const gameOverMarkup = gameLost ? "Game over! You lost." : gameWon ? "Congratulationz, You won!" : ""

  return <Page>
    <Header>
      <GameOver>{gameOverMarkup}</GameOver>
      <Button onClick={() => newGame()}>New game</Button>
    </Header>
    <Board>{boardMarkup}</Board>
    <MovesLeft>{movesLeft}/{totalMoves}</MovesLeft>
  </Page>
}
