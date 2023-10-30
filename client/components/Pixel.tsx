import { useState } from 'react'
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

function Pixel() {
  const [colour, setColour] = useState(getRandomColor)

  const handleClick = (event: UIEvent) => {
    setColour(getRandomColor)
  }

  // const handleMouseEnter = (event: UIEvent) => {
  //   setColour('black')
  // }
  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: colour, height: '100px', width: '100px' }}
    ></div>
  )
}
export default Pixel
