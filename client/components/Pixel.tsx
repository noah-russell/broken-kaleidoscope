import { useState } from 'react'

function Pixel() {
  const getRandomColour = () =>
    `#${Math.floor(Math.random() * 0x1000)
      .toString(16)
      .padStart(3, '0')}`


  const [colour, setColour] = useState(getRandomColour)

  const handleClick = (event: UIEvent) => {
    setColour(getRandomColour)
  }



  return (
    <div
      style={{
        backgroundColor: colour ,
        width: '30px',
        height: '30px',
        margin: '1px',
      }}
      onClick={handleClick}
    />
  )
}

export default Pixel
