import Peg from './Peg'
import ProgressBox from './ProgressBox'

export default function Row(props) {
  const { row, updateRow, activeColor, active, rowIdx, code, evaluate, gameWon, pegsPerRow } = props

  const setColor = (activeColor, idx) => {
    let newRow = {...row}
    newRow.row[idx] = activeColor

    updateRow(newRow)
  }

  const getPegs = row.row.map((peg, idx) => {
    return <Peg key={idx}
      color={row.row[idx]}
      active={(active === rowIdx)}
      setColor={() => setColor(activeColor, idx)}/>
  })

  return <div className={"row" + (active === rowIdx ? " active" : "")}>
    <div className="pegs">{getPegs}</div>
    <ProgressBox active={active}
      row={row.row}
      code={code}
      gameWon={gameWon}
      rowIdx={rowIdx}
      pegsPerRow={pegsPerRow}
      evaluate={evaluate}
      evaluation={row.evaluation}/>
  </div>
}
