import { useState } from 'react'

function Pixel() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000)
      .toString(16)
      .padStart(3, '0')}`
  console.log(getRandomColor)



  const [color, setColor] = useState(getRandomColor)

  return (
    <div
      style={{
        backgroundColor: color ,
        width: '30px',
        height: '30px',
        margin: '1px',
      }}
    />
  )
}

export default Pixel
