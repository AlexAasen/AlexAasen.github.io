import styled from 'styled-components'
import { useState } from 'react'
import { range, each, flatten, delay, clone, every, maxBy } from 'lodash'
import { getRandom } from 'utils/helpers'
import { findMatches, removeMatches, moveEntries } from './utils'

const Page = styled.div`
  display: flex;
  flex-direction: column;`

const Board = styled.div`
  margin: 20px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${props => "repeat(" + props.columns + ", 1fr)"};`

const BoardEntry = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.color};
  cursor: pointer;`

const colors = ["#262525", "#ff9900", "#fff344", "#37f194", "#7d1ede", "#ce60c3"]
const getRandomColor = () => colors[getRandom(0, colors.length - 1)]

const init = (rows, columns) => {
  let board = range(rows).map(() => range(columns).map(() => ({
    color: getRandomColor()
  })))

  return manageBoard(board)
}

const manageBoard = board => {
  let newBoard = findMatches(board)
  newBoard = removeMatches(newBoard)
  //newBoard = moveEntries(newBoard)

  return newBoard
}

export default function Bejeweled(){
  const columns = 10
  const rows = 10

  const [board, setBoard] = useState(init(rows, columns))

  const boardMarkup = board.map((row, rowIdx) => {
    return row.map((col, colIdx) => {
      return <BoardEntry key={"idx-" + rowIdx + "-" + colIdx} color={col.color}></BoardEntry>
    })
  })

  return <Page>
    <Board columns={columns}>
      {boardMarkup}
    </Board>
  </Page>
}
