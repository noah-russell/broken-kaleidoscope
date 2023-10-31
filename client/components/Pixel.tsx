/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { MouseEvent } from 'react'

function Pixel() {
  function getRandomColor() {
    const range = 0x100
    const add = 0x10000

    const randomNumber = Math.floor(Math.random() * range)

    const result = randomNumber.toString(16)

    console.log(result)

    return `#00${result}00`
  }

  const [color, setColor] = useState(getRandomColor)
  const handleClick = () => {
    setColor(getRandomColor)
  }
  const turnGreen = () => {
    setColor('green')
    console.log('turnGreen')
  }
  const turnYellow = () => {
    setColor('yellow')
    console.log('turnGreen')
  }

  const turnBlack = (event: MouseEvent) => {
    setColor('black')
    event.preventDefault()
  }

  return (
    <div
      style={{
        height: '50px',
        width: '50px',
        backgroundColor: color,
      }}
      onMouseEnter={handleClick}
      onDoubleClick={turnGreen}
      onDragEnter={turnYellow}
      onContextMenu={turnBlack}
    />
  )
}

export default Pixel
