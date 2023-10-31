import { useState } from 'react'

function Pixel() {
  const getRandomColour = () =>
    `#${Math.floor(Math.random() * 0x1000)
      .toString(16)
      .padStart(3, '0')}`

  const [colour, setColour] = useState(getRandomColour)

  const handleClick = (event: UIEvent) => {
    setColour(getRandomColour)
  }

  const handleDragEnter = (event: UIEvent) => {
    setColour('pink')
  }

  return (
    <div
      style={{
        backgroundColor: colour,
        width: '30px',
        height: '30px',
        // margin: '1px',
        padding: '2px',
      }}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
    />
  )
}

export default Pixel
