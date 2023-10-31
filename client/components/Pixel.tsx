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
  setInterval(handleClick, 10000)

  const handleMouseEnter = (event: UIEvent) => {
    setColour('black')
  }

  const handleDoubleClick = (event: UIEvent) => {
    setColour('white')
  }

  const handleOnDragEnter = (event: UIEvent) => {
    setColour('yellow')
  }

  const handleOnContextMenu = (event: UIEvent) => {
    setColour('red')
    event.preventDefault()
  }

  return (
    <div
      onContextMenu={handleOnContextMenu}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleOnDragEnter}
      style={{ backgroundColor: colour, height: '100px', width: '100px' }}
    ></div>
  )
}
export default Pixel
