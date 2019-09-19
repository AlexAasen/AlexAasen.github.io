export default function Peg(props) {
  const { color, active, setColor } = props

  return <div className={"peg " + (color ? "colored" : "")}
    style={{ background: color || "none", cursor: active ? "pointer" : "initial" }}
    onClick={() => active ? setColor() : null}></div>
}
