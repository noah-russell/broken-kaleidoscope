import { useState } from 'react'

export function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor())

  function handleClick() {
    setColor(getRandomColor())
  }

  return (
    <div
      onClick={handleClick}
      style={{
        fontFamily: 'Times New Roman',
        height: '10px',
        width: '10px',
        backgroundColor: color,
      }}
    ></div>
  )
}
