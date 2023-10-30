import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState('green')
  function changeState() {
    setColor('red')
  }

  return (
    <div
      style={{ height: '100px', width: '100px', backgroundColor: color }}
    ></div>
  )
}

export default Pixel
