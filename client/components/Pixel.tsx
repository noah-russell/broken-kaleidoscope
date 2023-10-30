import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState('yellow')

  return (
    <div
      style={{
        height: '50px',
        width: '50px',
        backgroundColor: color,
      }}
    />
  )
}

export default Pixel
