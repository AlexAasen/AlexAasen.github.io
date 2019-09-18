let { useState, useEffect } = require('react')

function useWidth() {
  let [width, setWidth] = useState(window.innerWidth)

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}

module.exports = useWidth
