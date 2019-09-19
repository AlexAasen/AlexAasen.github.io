import { range, each } from 'lodash'
import colors from './colors'
import { getRandom } from 'utils/helpers'

export const generateCode = pegsPerRow => {
  return range(pegsPerRow).map(() => {
    const randomIdx = getRandom(0, colors.length - 1)
    return colors[randomIdx]
  })
}

export const evaluateCode = (code, row, pegsPerRow) => {
  let evaluation = range(pegsPerRow)
  let pegMemory = {}
  let correctGuesses = 0

  each(row, (color, idx) => {
    if(code[idx] === color){
      pegMemory[color] = pegMemory[color] ? pegMemory[color] + 1 : 1
      correctGuesses = correctGuesses + 1
      evaluation[idx] = "black"
    }
  })

  each(row, (color, idx) => {
    if(evaluation[idx] !== "black"){
      if(code.indexOf(color) !== -1){
        let numberOfInstances = 0

        each(code, hiddenColor => {
          if(color === hiddenColor){
            numberOfInstances = numberOfInstances + 1
          }
        })
        //How many have we registered?
        if(pegMemory[color] && (pegMemory[color] < numberOfInstances)){
          pegMemory[color] = pegMemory[color] + 1
          evaluation[idx] = "white"
        }
        else if(!pegMemory[color]){
          pegMemory[color] = 1
          evaluation[idx] = "white"
        }
      }
    }
  })

  return { evaluation, correctGuesses }
}
