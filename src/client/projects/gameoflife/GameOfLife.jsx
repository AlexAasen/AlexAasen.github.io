import React from 'react'
import { diff } from 'deep-diff'
import { forEach, reject, flatten, contains, repeat, addIndex } from 'ramda'
import { getRandom } from 'utils/helpers'

import Button from 'components/Button'

const widthDensity = 40
const heightDensity = 30

class GameOfLife extends React.Component {
  constructor(){
    super()
    this.state = {
      board: []
    }

    this.interval = null
    this.getId = (colIndex, rowIndex) => (rowIndex * widthDensity) + colIndex
    this.componentCleanup = this.componentCleanup.bind(this)
  }

  componentDidMount(){
    window.addEventListener('beforeunload', this.componentCleanup)
    this.init()
  }

  componentWillUnmount() {
    this.componentCleanup()
    window.removeEventListener('beforeunload', this.componentCleanup)
  }

  componentCleanup(){
    clearInterval(this.interval)
  }

  init(){
    const board = repeat(repeat(false, widthDensity), heightDensity)

    this.setState({ board }, () => this.setUpSim())
  }

  setUpSim(){
    const indexes = this.generateStartPos()

    this.setState({ board: this.updateStartPos(indexes) }, () => {
      this.startSim()
    })
  }

  generateStartPos(){
    const base = [Math.floor((widthDensity/2) - 4), Math.floor((heightDensity/2) - 3)]
    const widthSpan = repeat(null, 8).map((x, idx) => base[0] + idx)
    const heightSpan = repeat(null, 6).map((x, idx) => base[1] + idx)

    let spanIds = flatten(heightSpan.map(rowIdx => {
      return widthSpan.map(colIdx => {
        return this.getId(colIdx, rowIdx, widthDensity)
      })
    }))

    forEach(() => {
      const randomIdx = getRandom(0, spanIds.length - 1)
      const rejectByIndex = addIndex(reject)
      spanIds = rejectByIndex((id, idx) => idx === randomIdx, spanIds)
    }, repeat(null, 24))

    return spanIds
  }

  updateStartPos(indexes){
    const { board } = this.state

    return board.map((row, rowIndex) => {
      return row.map((column, colIndex) => {
        const id = this.getId(colIndex, rowIndex, widthDensity)

        return contains(id, indexes)
      })
    })
  }

  startSim(){
    clearInterval(this.interval)

    this.interval = setInterval(() => {
      const prevBoard = this.state.board
      const newBoard = this.update()

      if(diff(prevBoard, newBoard)){
        this.setState({ board: newBoard })
      }
      else {
        clearInterval(this.interval)
      }
    }, 600)
  }

  /*RULES
  For a space that is populated:
    Each cell with one or no neighbors dies, as if by solitude.
    Each cell with four or more neighbors dies, as if by overpopulation.
    Each cell with two or three neighbors survives.
  For a space that is empty or unpopulated
    Each cell with three neighbors becomes populated.
  */
  update(){
    const { board } = this.state

    return board.map((row, rowIdx) => {
      return row.map((column, columnIdx) => {
        const occupied = column
        const surrounding = this.getSurrounding(board, rowIdx, columnIdx)
        const neighbours = surrounding.filter(x => !!x).length

        if(occupied){
          if(neighbours <= 1) return false
          if(neighbours >= 4) return false
          return true
        }
        if(neighbours === 3) return true
        return false
      })
    })
  }

  getSurrounding(board, rowIdx, colIdx){
    const validRow = rowIdx => (rowIdx >= 0) && (rowIdx < heightDensity)
    const validCol = colIdx => (colIdx >= 0) && (colIdx < widthDensity)
    const possiblePos = (rowIdx, colIdx) => validRow(rowIdx) && validCol(colIdx)

    const nw = possiblePos(rowIdx - 1, colIdx - 1) && board[rowIdx - 1][colIdx - 1]
    const n = possiblePos(rowIdx - 1, colIdx) && board[rowIdx - 1][colIdx]
    const ne = possiblePos(rowIdx - 1, colIdx + 1) && board[rowIdx - 1][colIdx + 1]
    const e = possiblePos(rowIdx, colIdx - 1) && board[rowIdx][colIdx - 1]
    const se = possiblePos(rowIdx, colIdx + 1) && board[rowIdx][colIdx + 1]
    const s = possiblePos(rowIdx + 1, colIdx - 1) && board[rowIdx + 1][colIdx - 1]
    const sw = possiblePos(rowIdx + 1, colIdx) && board[rowIdx + 1][colIdx]
    const w = possiblePos(rowIdx + 1, colIdx + 1) && board[rowIdx + 1][colIdx + 1]

    return [nw, n, ne, e, se, s, sw, w]
  }

  renderBoard(){
    const { board } = this.state

    const colWidth = 100 / widthDensity
    const rowHeight = 100 / heightDensity
    const borderMargin = 1 + (1 / widthDensity)

    const rowMarkup = (row, rowIdx) => {
      return row.map((column, columnIdx) => {
        const id = this.getId(columnIdx, rowIdx, widthDensity)
        const colorStyle = column ? ' colored ' : ''

        return <div key={"column-" + id}
          className={"box id-" + id + colorStyle}
          style={{ width: 'calc(' + colWidth + '% - ' + borderMargin + 'px)' }}></div>
      })
    }

    return board.map((row, rowIdx) => {
      return(
        <div key={"row-" + rowIdx}
          className={"row id-" + rowIdx}
          style={{ height: rowHeight + "%" }}>
          {rowMarkup(row, rowIdx)}
        </div>)
    })
  }

  render(){
    return(
      <div className="project-game-of-life">
        <div className="button-holder">
          <Button className="generate-button" onClick={this.setUpSim.bind(this)}>New simulation</Button>
        </div>
        <div className="board-container" ref="board-container">
          {this.renderBoard()}
        </div>
      </div>)
  }
}

export default GameOfLife
