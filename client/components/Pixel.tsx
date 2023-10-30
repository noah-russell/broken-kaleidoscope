import { useState } from 'react'

function Pixel() {
  const [colour, setColor] = useState('blue')

  return (
    <div
      style={{ backgroundColor: colour, height: '100px', width: '100px' }}
    ></div>
  )
}
export default Pixel
