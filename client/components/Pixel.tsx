import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  const [color, changeColor] = useState(getRandomColor())
  const handleClick = (event: UIEvent) => {
    changeColor(getRandomColor())
  }
  return (
    <div
      onClick={handleClick}
      style={{
        background: color,
        height: '30px',
        width: '30px',
      }}
      className="pixel"
    ></div>
  )
}

export default Pixel
