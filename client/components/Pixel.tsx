import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState('salmon')

  return (
    <div
      style={{
        backgroundColor: color,
        width: '30px',
        height: '30px',
        margin: '1px',
      }}
    />
  )
}

export default Pixel
