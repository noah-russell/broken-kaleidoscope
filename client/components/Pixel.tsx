import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor)

  return (
    <>
      <div
        style={{
          fontFamily: 'Times New Roman',
          backgroundColor: color,
          height: '30px',
          width: '30px',
        }}
      ></div>
    </>
  )
}

export default Pixel
