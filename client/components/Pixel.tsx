import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor)

  return (
    <div
      style={{
        height: '50px',
        width: '50px',
        backgroundColor: color,
      }}
    />
  )
}

export default Pixel
