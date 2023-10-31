import { useState } from 'react'

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

function Pixel() {
  const [colour, setColour] = useState(getRandomColor)
  return (
    <div
      style={{ backgroundColor: colour, height: '20px', width: '20px' }}
    ></div>
  )
}

export default Pixel
