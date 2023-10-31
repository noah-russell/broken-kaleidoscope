import { useState } from 'react'

export default function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor) // -- Randomizes all pixel colors

  const handleClick = (event: UIEvent) => [setColor(getRandomColor)]
  const handleEnter = (event: UIEvent) => [setColor('black')]
  // const handleKeyDown = (event: UIEvent) => {
  //   console.log(event)
  // }

  return (
    <div
      className="heheha"
      style={{ backgroundColor: color, height: '35px', width: '35px' }} //-- Pixel customization
      //
      // onKeyDown={handleKeyDown} // -- WIP, should change pixel colors to red while holding down shift
      onClick={handleClick} // -- mouse1 click pixels colors will be randomized
      onDragEnter={handleEnter} // -- When holding down mouse1 pixels colors will be changed to black
    ></div>
  )
}
