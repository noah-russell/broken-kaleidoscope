import { useState } from 'react'
import { MouseEvent } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, changeColor] = useState(getRandomColor())

  const handleClick = (event: UIEvent) => {
    changeColor(getRandomColor())
  }

  const mouseOver = (event: UIEvent) => {
    changeColor('salmon')
  }

  // const scrollTop = (event: UIEvent) => {
  //   changeColor(getRandomColor())
  // }

  // const scrollTop = (event: UIEvent) => {
  //   changeColor(event.currentTarget.color)
  // }

  const onDrag = (event: UIEvent) => {
    changeColor('orange')
  }

  const onRightClick = (event: MouseEvent) => {
    event.preventDefault()
    changeColor('black')
  }

  // console.log(scrollTop)

  return (
    <div
      style={{
        background: color,
        height: '30px',
        width: '30px',
      }}
      className="pixel"
      // onScroll={scrollTop}
      onClick={handleClick}
      onMouseEnter={mouseOver}
      onDragEnter={onDrag}
      onContextMenu={onRightClick}
    ></div>
  )
}

export default Pixel
