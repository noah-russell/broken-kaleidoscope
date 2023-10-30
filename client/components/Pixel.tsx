import { useState } from 'react'

export default function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor)
  const handleClick = (event: UIEvent) => [setColor(getRandomColor)]
  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: color, height: '25px', width: '24px' }}
    ></div>
  )
}
