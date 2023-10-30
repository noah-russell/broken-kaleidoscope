import { useState } from 'react'

export function Pixel() {
  const [color, setColor] = useState('blue')

  function changeColor() {
    setColor('red')
  }
  return (
    <div
      style={{
        fontFamily: 'Times New Roman',
        height: '15px',
        width: '15px',
        backgroundColor: color,
      }}
    ></div>
  )
}
