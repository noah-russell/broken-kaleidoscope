import { useState } from 'react'
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

function Pixel() {
  const [colour, setColor] = useState(getRandomColor)
  return (
    <div
      style={{ backgroundColor: colour, height: '100px', width: '100px' }}
    ></div>
  )
}
export default Pixel
