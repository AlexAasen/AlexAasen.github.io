import React from 'react'
import { diff } from 'deep-diff'
import { shuffle, reject, includes } from 'lodash'
import Cookies from 'js-cookie'

import Button from 'components/Button'

class Memory extends React.Component {
  constructor(){
    super()
    this.state = {
      board: []
    }
    this.blocking = false
    this.imgs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']
  }

  componentDidMount(){
    this.setUpBoard()
  }

  setUpBoard(){
    const board = this.imgs.concat(this.imgs)

    this.setState({ board: shuffle(board), selected: [], gameOver: false, guesses: 0 })
  }

  selectEntry(idx){
    let newSelection = [...this.state.selected]
    newSelection.push(idx)

    if(newSelection.length === 2){
      this.blocking = true
      this.setState({ selected: newSelection }, () => {
        this.evaluateSelection(newSelection)
      })
    }
    else{
      this.setState({ selected: newSelection })
    }
  }

  evaluateSelection(selected){
    const { board, guesses } = this.state
    let newBoard = [...board]

    const first = board[selected[0]]
    const second = board[selected[1]]

    if(!diff(first, second)){
      newBoard[selected[0]] = 'solved'
      newBoard[selected[1]] = 'solved'
    }

    const gameOver = reject(newBoard, item => item === 'solved').length === 0

    setTimeout(() => {
      this.blocking = false
      this.setState({ selected: [], board: newBoard, gameOver, guesses: guesses + 1 })
    }, 1500)
  }

  renderBoard(){
    const { selected, board } = this.state

    return board.map((item, idx) => {
      const isSelected = includes(selected, idx)
      const styleClass = isSelected ? 'selected' : item === 'solved' ? 'solved' : 'hidden'
      const disabled = isSelected || (item === 'solved') || this.blocking

      return(
        <div key={idx}
          className={"board-entry " + styleClass}
          onClick={() => !disabled && this.selectEntry(idx)}>
          <p className="entry">
            {isSelected && item}
          </p>
        </div>)
    })
  }

  gameOver(){
    const { guesses } = this.state

    const prevHighScore = Cookies.get('memoryHighScore')
    const newHighScore = !prevHighScore || (prevHighScore && (guesses < prevHighScore))

    if(newHighScore){
      Cookies.set('memoryHighScore', guesses)
    }

    return newHighScore ? (
      <div className="gameover">
        <p>New highscore! You won in {guesses} guesses!</p>
        {prevHighScore && <p>Previous highscore: {prevHighScore}</p>}
      </div>
    ) : <div className="gameover">
      <p>You won in {guesses} guesses!</p>
    </div>
  }

  render(){
    const { gameOver } = this.state

    const board = gameOver ? this.gameOver() : this.renderBoard()

    return(
      <div className="project-memory">
        <div className="button-holder">
          <Button className="generate-button" onClick={this.setUpBoard.bind(this)}>Start new game</Button>
        </div>
        <div className="board-container">
          {board}
        </div>
      </div>)
  }
}

export default Memory
