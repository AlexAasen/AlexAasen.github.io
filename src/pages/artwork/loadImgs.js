import { useState, useEffect } from 'react'
import { each } from 'lodash'

export default function loadImgs(feed) {
  const [imgs, setImgs] = useState([])

  useEffect(() => {
    let promises = []

    const loadImage = path => new Promise(resolve => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = path
    })

    each(feed, x => promises.push(loadImage(x)))

    Promise.all(promises).then(result => {
      setImgs(result)
    })
  }, [])

  return imgs
}
