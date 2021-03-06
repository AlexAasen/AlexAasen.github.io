import React from 'react'
import { each, min, findIndex, range } from 'lodash'

import feed from './feed'

class NewsFeed extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loadedImgs: null,
      feed: null
    }
    this.generateFeed = this.generateFeed.bind(this)
  }

  componentDidMount(){
    window.addEventListener("resize", this.generateFeed)
    this.loadImages()
  }

  componentWillUnMount(){
    window.removeEventListener("resize", this.generateFeed)
  }

  isUnmounted() {
    if (!this.refs["newsfeed-container"]) return true
    return false
  }

  loadImages(){
    let promises = []

    const loadImage = path => new Promise(resolve => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = path
    })

    each(feed, x => promises.push(loadImage(x)))
    Promise.all(promises).then(result => {
      this.setState({ loadedImgs: result }, this.generateFeed)
    })
  }

  generateFeed(){
    if (this.isUnmounted()) return
    const { loadedImgs } = this.state
    const container = this.refs["newsfeed-container"]

    let columns = 3
    if(container.offsetWidth <= 1000) columns = 1
    else if(container.offsetWidth <= 1400) columns = 2

    let imgColumns = range(columns).map(() => [])
    const imgWidth = (container.offsetWidth / columns) - columns + 1

    each(loadedImgs, img => {
      const imgFactor = imgWidth / img.width
      img.height = imgFactor * img.height
      img.width = imgWidth

      const heights = imgColumns.map(x => x.reduce((curr, acc) => curr + acc.height, 0))
      const next = findIndex(heights, x => x === min(heights))

      imgColumns[next].push(img)
    })

    this.setState({ feed: imgColumns })
  }

  render(){
    const { feed } = this.state

    const colMarkup = feed?.map((column, colIdx) => {
      return <ol key={colIdx}>{column?.map((img, imgIdx) => {
        return <img key={imgIdx} style={{ width: img.width, height: img.height }} src={img.src}></img>
      })}</ol>
    })

    return(
      <div className="newsfeed-container">
        <div className="newsfeed-content" ref="newsfeed-container">
          {colMarkup}
        </div>
      </div>)
  }
}

export default NewsFeed
