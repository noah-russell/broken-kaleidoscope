import { useState } from 'react'

const getRandomColor = () =>
  //Math.random generates a random decimal number bet. 0 and 1
  //0x1000000 = hex representation of 16,777,216
  //Math.random() * 0x1000000 -> picks a random number from 0 to 16,777,215
  //Math.floor() -> used to round down decimals to nearest whole
  `#${Math.floor(Math.random() * 0x1000000)
    //this converts the random # into hexadecimal string i.e. "#A1B2C3"
    .toString(16)
    //ensures that hex string is always 6 chars. long. Adds 0 to the beginning if its shorter.
    .padStart(6, '0')}`

function Pixel() {
  const [colour, setColour] = useState(getRandomColor)
  return (
    <div
      style={{ backgroundColor: colour, height: '20px', width: '20px' }}
    ></div>
  )
}

export default Pixel
