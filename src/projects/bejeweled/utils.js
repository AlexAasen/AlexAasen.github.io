import { each, clone, every } from 'lodash'

const getPos = (board, rowIdx, colIdx) => board?.[rowIdx]?.[colIdx]

export const findMatches = board => {
  let newBoard = clone(board)

  each(newBoard, (row, rowIdx) => {
    each(row, (col, colIdx) => {
      const e = [newBoard[rowIdx][colIdx], getPos(newBoard, rowIdx, colIdx + 1), getPos(newBoard, rowIdx, colIdx + 2)]
      const w = [newBoard[rowIdx][colIdx], getPos(newBoard, rowIdx, colIdx - 1), getPos(newBoard, rowIdx, colIdx - 2)]
      const s = [newBoard[rowIdx][colIdx], getPos(newBoard, rowIdx + 1, colIdx), getPos(newBoard, rowIdx + 2, colIdx)]
      const n = [newBoard[rowIdx][colIdx], getPos(newBoard, rowIdx - 1, colIdx), getPos(newBoard, rowIdx - 2, colIdx)]
      const we = [newBoard[rowIdx][colIdx], getPos(newBoard, rowIdx, colIdx - 1), getPos(newBoard, rowIdx, colIdx + 1)]
      const ns = [newBoard[rowIdx][colIdx], getPos(newBoard, rowIdx - 1, colIdx), getPos(newBoard, rowIdx + 1, colIdx)]

      const patterns = [n, e, s, w, we, ns]

      const matchingPatterns = patterns.filter(pattern => every(pattern, x => x?.color === pattern[0]?.color))

      if(matchingPatterns.length > 0){
        newBoard[rowIdx][colIdx] = { ...newBoard[rowIdx][colIdx], isPartOfCluster: true }
      }
    })
  })

  return newBoard
}

export const removeMatches = board => {
  return board.map(row => row.map(col => {
    if(col.isPartOfCluster){
      return { color: null, isPartOfCluster: null }
    }
    return col
  }))
}

export const moveEntries = board => {
  let newBoard = clone(board)
  let entriesMoved

  do {
    entriesMoved = false

    each(newBoard, (row, rowIdx) => {
      each(row, (col, colIdx) => {
        if(col.color && getPos(newBoard, rowIdx + 1, colIdx)?.color === null){
          entriesMoved = true

          newBoard[rowIdx + 1][colIdx] = col
        }
      })
    })
  } while(entriesMoved)

  return newBoard
}
