import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  const [colour, setColour] = useState(getRandomColor())

  return (
    <div
      style={{ backgroundColor: colour, height: '50px', width: '50px' }}
    ></div>
  )
}

export default Pixel
