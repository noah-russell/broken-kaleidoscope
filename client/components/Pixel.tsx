import { useState } from 'react'
import { MouseEvent } from 'react'
import { useEffect } from 'react'

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

  const onDrag = (event: UIEvent) => {
    changeColor('orange')
  }

  const onRightClick = (event: MouseEvent) => {
    event.preventDefault()
    changeColor('black')
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       changeColor(getRandomColor())
  //     } else {
  //       changeColor(getRandomColor())
  //     }
  //   }
  // })

  // console.log(scrollTop)

  return (
    <div
      style={{
        background: color,
        height: '50px',
        width: '50px',
        overflow: 'auto',
      }}
      className="pixel"
      // onScroll={useEffect}
      onClick={handleClick}
      onMouseEnter={mouseOver}
      onDragEnter={onDrag}
      onContextMenu={onRightClick}
    ></div>
  )
}

export default Pixel
