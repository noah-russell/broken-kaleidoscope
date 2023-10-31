import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor())

  const handleClick = () => {
    setColor('red')
  }

  return (
    <div
      onClick={handleClick}
      style={{ height: '100px', width: '100px', backgroundColor: color }}
    ></div>
  )
}

export default Pixel
