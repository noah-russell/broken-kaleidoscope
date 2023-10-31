import { useState,useEffect } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor())
  const handleClick = (event: UIEvent) => {
    setColor(getRandomColor())
  }
  useEffect(()=>{
    setInterval(()=>{})
  })
  function black(event) {
    event.preventDefault()
    setColor('black')
  }
  function colorWhite() {
    setColor('darkSalmon')
  }

  function colorYellow() {
    setColor('Yellow')
  }

  return (
    <div
      style={{
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        background: color,
      }}
      onClick={handleClick}
      onMouseEnter={handleClick}
      onDoubleClick={colorWhite}
      onDragEnter={colorYellow}
      onContextMenu={black}
    ></div>
  )
}

export default Pixel
