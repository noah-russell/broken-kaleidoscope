import { useState } from 'react'

function Pixel() {
  const [colour, setColour] = useState('purple')
  return (
    <div
      style={{ backgroundColor: colour, height: '20px', width: '20px' }}
    ></div>
  )
}

export default Pixel
