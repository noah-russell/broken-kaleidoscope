import { useState } from 'react'
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

function Pixel() {
  const [colour, setColour] = useState(getRandomColor)

  // const handleClick = (event: UIEvent) => {
  //   setColour(getRandomColor)
  // }

  const handleMouseEnter = (event: UIEvent) => {
    setColour('black')
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{ backgroundColor: colour, height: '10px', width: '10px' }}
    ></div>
  )
}
export default Pixel
