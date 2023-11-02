import { useState, useEffect } from 'react'

export function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor())

  function handleClick() {
    setColor(getRandomColor())
  }

  function rightClick(event) {
    event.preventDefault()
    return setColor('black')
  }

  function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1)
      }, 1999)
    })

    return getRandomColor()
  }

  // function mouseEnter() {
  //   setColor('black')
  // }

  // function doubleClick() {
  //   setColor('white')
  // }

  // function dragEnter() {
  //   setColor('yellow')
  // }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setColor('green')}
      onDoubleClick={() => setColor('black')}
      onDragEnter={() => setColor('white')}
      onContextMenu={rightClick}
      style={{
        fontFamily: 'Times New Roman',
        height: '20px',
        width: '20px',
        backgroundColor: color,
      }}
    ></div>
  )
}
