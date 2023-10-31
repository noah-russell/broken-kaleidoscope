import { useState } from 'react'

function Pixel() {
  function getRandomColor(){
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`}

  const [color, setColor] = useState(getRandomColor)

  const handleClick = (event: UIEvent) => {
    setColor(getRandomColor)
  }

  return (
    <>
      
      <div onClick={handleClick}
        style={{
          
          fontFamily: 'Times New Roman',
          backgroundColor: color,
          height: '30px',
          width: '30px',
        }}
      ></div>
    </>
  )
}

export default Pixel
