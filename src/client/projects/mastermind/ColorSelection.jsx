import colors from './colors'

export default function ColorSelection(props) {
  const { setActiveColor, activeColor } = props

  const colorMarkup = colors.map((color, idx) => {
    return <div key={idx}
      className={"color " + (activeColor === color ? "active" : "")}
      onClick={() => setActiveColor(color)}
      style={{ background: color }}></div>
  })

  return <div className="colors">{colorMarkup}</div>
}
