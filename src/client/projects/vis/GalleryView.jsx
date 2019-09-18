import React from 'react'
import Icon from 'components/Icon'

class GalleryView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIdx: 0
    }
  }

  updateState(idx){
    this.setState(state => ({ activeIdx: idx, prevIdx: state.activeIdx, initial: false }))
  }

  render(){
    const { activeIdx } = this.state
    const { list } = this.props

    const backIdx = (activeIdx - 1) < 0 ? 0 : activeIdx - 1
    const nextIdx = (activeIdx + 1) > (list.length - 1) ? list.length - 1 : activeIdx + 1
    const prevDis = (activeIdx === 0) ? "disabled" : ''
    const nextDis = (activeIdx === (list.length - 1)) ? 'disabled' : ''

    const imgMarkup = list.map((item, idx) => {
      const styleClass = activeIdx === idx ? 'focus' : ''

      return <div key={idx} className="img-holder" onClick={this.updateState.bind(this, idx)}>
        <img className={"image-entry " + styleClass}
          src={item.thumbnail}></img>
      </div>
    })

    return(
      <div className="project-view">
        <div id="active-view-holder" className="active-view-holder">
          <Icon className={"icon inverted " + prevDis} icon="play2" onClick={this.updateState.bind(this, backIdx)}></Icon>
          {list[activeIdx].component}
          <Icon className={"icon " + nextDis} icon="play2" onClick={this.updateState.bind(this, nextIdx)}></Icon>
        </div>
        <div className="selection-panel">
          {imgMarkup}
        </div>
      </div>)
  }
}

export default GalleryView
