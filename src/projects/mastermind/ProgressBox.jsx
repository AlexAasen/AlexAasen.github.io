import { evaluateCode } from './utils'

export default function ProgressBox(props) {
  const { active, row, code, rowIdx, evaluate, evaluation, gameWon, pegsPerRow } = props

  const prepEval = () => {
    const result = evaluateCode(code, row, pegsPerRow)
    console.log(result, "result")
    result.correctGuesses === code.length ? gameWon() : evaluate(result.evaluation)
  }

  const lockedEval = <button className="evaluation-button locked">Submit</button>
  const evalButton = <button className="evaluation-button" onClick={() => prepEval()}>Submit</button>

  const evalResult = evaluation?.map((peg, idx) => {
    return <div key={idx} className="progress-peg" style={{ background: peg }}></div>
  })

  let progress
  if(active < rowIdx) progress = lockedEval
  else if(!evaluation && (active === rowIdx)) progress = evalButton
  else progress = evalResult

  return <div className="progress-box">{progress}</div>
}
