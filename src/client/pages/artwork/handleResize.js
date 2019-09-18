import { useState, useEffect } from 'react'
import { each, min, findIndex, range } from 'lodash'

export default function handleResize(imgs){
  const [dividedImgs, setDividedImgs] = useState([])

  const divide = () => {
    const container = document.getElementById("newsfeed-content")

    const margin = 20
    let columns = 3
    if(container.offsetWidth <= 1000) columns = 1
    else if(container.offsetWidth <= 1400) columns = 2

    let divided = range(columns).map(() => [])
    const imgWidth = ((container.offsetWidth - (margin * (columns - 1))) / columns)

    each(imgs, img => {
      const imgFactor = img.width / imgWidth
      img.height = img.height / imgFactor
      img.width = imgWidth

      const heights = divided.map(x => x.reduce((curr, acc) => curr + acc.height, 0))
      const next = findIndex(heights, x => x === min(heights))

      divided[next].push(img)
    })

    setDividedImgs(divided)
  }

  useEffect(() => {
    divide()
    window.addEventListener('resize', divide)
    return () => {
      window.removeEventListener('resize', divide)
    }
  }, [])

  return dividedImgs
}
