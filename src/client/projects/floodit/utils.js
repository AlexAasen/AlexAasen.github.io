import { range, each, flatten } from 'lodash'
import { getRandom } from 'utils/helpers'

const colors = ["#262525", "#ff9900", "#fff344", "#37f194", "#7d1ede", "#ce60c3"]

const getRandomColor = () => colors[getRandom(0, colors.length - 1)]

export const initBoard = () => {
  let board = range(14).map(() => {
    return range(14).map(() => ({
      color: getRandomColor(),
      merged: false
    }))
  })

  board[0][0] = {...board[0][0], merged: true }

  return mergeNeighbours(board, board[0][0].color)
}

export const getSurrounding = (board, rowIdx, colIdx) => {
  const n = board[rowIdx - 1]?.[colIdx]
  const s = board[rowIdx + 1]?.[colIdx]
  const e = board[rowIdx]?.[colIdx + 1]
  const w = board[rowIdx]?.[colIdx - 1]

  return [n, s, e, w]
}

export const mergeNeighbours = (board, color) => {
  let merged

  do {
    merged = 0

    each(board, (row, rowIdx) => {
      each(row, (col, colIdx) => {
        const surrounding = getSurrounding(board, rowIdx, colIdx)
        const mergedNeighbours = surrounding.filter(x => !!x?.merged).length

        if(!col.merged && (mergedNeighbours > 0) && (color === board[rowIdx][colIdx].color)){
          merged++
          board[rowIdx][colIdx] = { ...col, merged: true }
        }
      })
    })
  } while (merged > 0)

  return board
}

export const updateColor = (board, color) => {
  return board.map(row => row.map(col => {
    if(col.merged) return { ...col, color }
    return col
  }))
}

export const checkGameWon = board => {
  return flatten(board).filter(x => !x.merged).length === 0
}
