/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor)
  const handleClick = (event: UIEvent) => {
    setColor(getRandomColor)
  }

  return (
    <div
      style={{
        height: '50px',
        width: '50px',
        backgroundColor: color,
      }}
      onClick={handleClick}
    />
  )
}

export default Pixel
