import { useState, useEffect } from 'react'
import { concat } from 'lodash'

export default function loadImgs(feed) {
  const [processed, setProcessed] = useState([])

  const loadImage = path => new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = path
  })

  useEffect(() => {
    if(processed.length < feed.length){
      feed[processed.length]
      loadImage(feed[processed.length]).then(result => {
        setProcessed(concat(processed, result))
      })
    }
  })

  return processed
}
