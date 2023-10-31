import { useState } from 'react'

function Pixel() {
  function randomColor(){
    return (
      Math.floor(Math.random()*9+1)+ 
      (Math.floor(Math.random()*9+1))*10 + 
      (Math.floor(Math.random()*9+1))*100 +
      (Math.floor(Math.random()*9+1))*1000
    )
  }

  console.log( Math.floor(Math.random()*9+1)*10)
  const threeNum = randomColor()

  const [color, setColor] = useState('#00'+threeNum)



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
