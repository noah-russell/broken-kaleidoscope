import { useState } from 'react'
function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor())
  const handleClick = (event: UIEvent) => {
    setColor(getRandomColor())
  }
  return (
    <div
      style={{
        fontFamily: 'Times New Roman',
        height: '500px',
        width: '500px',
        background: color,
      }}
      onClick={handleClick}
    ></div>
  )
}

export default Pixel
