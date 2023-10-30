import { useState } from 'react'

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

function Pixel() {
  const [color, setColor] = useState(getRandomColor())

  const handleClick = (event: UIEvent) => {
    setColor(getRandomColor())
  }

  return (
    <div
      style={{
        fontFamily: 'Times New Roman',
        height: '1vh',
        width: '1vw',
        backgroundColor: color,
      }}
      onMouseEnter={handleClick}
    ></div>
  )
}

export default Pixel
