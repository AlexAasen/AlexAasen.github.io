import { range } from 'lodash'
import React from 'react'

import Row from './Row'
import Peg from './Peg'
import ColorSelection from './ColorSelection'
import { generateCode } from './utils'

class Mastermind extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pegsPerRow: 5,
      rows: 10,
      activeColor: null
    }
  }

  componentWillMount(){
    this.init()
  }

  init(){
    const { rows, pegsPerRow } = this.state
    const code = this.generateCode()

    this.setState({
      board: range(rows).map(() => ({
        row: range(pegsPerRow).map(() => null),
        evaluation: null
      })),
      code: code,
      gameWon: false,
      activeRow: 0,
      showCode: false
    })
  }

  generateCode(){
    const { pegsPerRow } = this.state
    return generateCode(pegsPerRow)
  }

  evaluate(row, evaluation){
    let { activeRow, board, rows } = {...this.state}

    activeRow = activeRow + 1
    const showCode = activeRow === rows

    let newRow = Object.assign({}, board[row])
    newRow.evaluation = evaluation

    this.setState({ activeRow: activeRow, showCode: showCode }, this.updateRow(row, newRow))
  }

  updateRow(row, newRow){
    const { board } = this.state
    let newBoard = board.slice(0)
    newBoard[row] = newRow
    this.setState({ board: newBoard })
  }

  gameWon(){
    this.setState({ gameWon: true, showCode: true })
  }

  getRows(){
    const { board, code, activeRow, activeColor, pegsPerRow, rows } = this.state

    return board.map((row, idx) => {
      return <Row key={idx} code={code}
        active={activeRow}
        rowIdx={(rows - 1 - idx)}
        pegsPerRow={pegsPerRow}
        row={row}
        updateRow={this.updateRow.bind(this, idx)}
        gameWon={this.gameWon.bind(this)}
        evaluate={this.evaluate.bind(this, idx)}
        activeColor={activeColor}/>
    })
  }

  getHidden(){
    const { showCode, code } = this.state

    return code.map((peg, idx) => {
      return <Peg key={idx}
        color={showCode ? peg : "none"}/>
    })
  }

  updateState(handle, value){
    this.setState({ [handle]: value })
  }

  gameOver(){
    const { gameWon, activeRow, rows } = this.state

    if(gameWon){
      return(
        <div className="game-over">
          <h3>Congratulationz!</h3>
          <p>You won</p>
          <div className="button-holder">
            <button className="play-again" onClick={this.init.bind(this)}>Play again</button>
          </div>
        </div>
      )
    }
    else if(activeRow === rows){
      return(
        <div className="game-over">
          <h3>Game Over!</h3>
          <p>You lost</p>
          <div className="button-holder">
            <button className="play-again" onClick={this.init.bind(this)}>Play again</button>
          </div>
        </div>
      )
    }
    return null
  }

  render(){
    const { activeColor, showCode } = this.state

    return(
      <div className="mastermind">
        <div className="inner-holder">
          <h2>Mastermind</h2>
          <div className={"hidden-code " + (showCode ? "visible" : "")}>
            {this.getHidden()}
          </div>
          <div className="game-board">
            <div className="game">
              {this.getRows()}
            </div>
            <ColorSelection activeColor={activeColor} setActiveColor={this.updateState.bind(this, "activeColor")}/>
          </div>
          {this.gameOver()}
        </div>
      </div>)
  }
}

export default Mastermind
