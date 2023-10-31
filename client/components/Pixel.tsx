import e from 'express'
import { useState, useEffect } from 'react'

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
  //declare useState
  const [colour, setColour] = useState(getRandomColor)
  //use to track if p key is pressed
  const [isPKeyPressed, setIsPKeyPressed] = useState(false)

  //use to add event listeners for keyup and keydown
  useEffect(() => {
    //keydown is called when p is pressed - set to true
    //keyup is called when p us released - set to false
    const handleKeyDown = (e) => {
      if (e.key === 'p') {
        setIsPKeyPressed(true)
      }
    }

    const handleKeyUp = (e) => {
      if (e.key === 'p') {
        setIsPKeyPressed(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      //cleanup function of useEffect
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  //[] -> ensures that this effect runs only once when the component mounts

  useEffect(() => {
    if (isPKeyPressed) {
      setColour('pink')
    } else {
      setColour(getRandomColor)
    }
    //dependency of the useEffect
  }, [isPKeyPressed])

  //event handler functions
  const handleClick = () => {
    setColour('white')
  }

  const handleDblClick = () => {
    setColour('black')
  }

  const handleDragEnter = () => {
    setColour('red')
  }

  const handleMouseEnter = () => {
    setColour('yellow')
  }

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDblClick}
      onDragEnter={handleDragEnter}
      onMouseEnter={handleMouseEnter}
      style={{ backgroundColor: colour, height: '20px', width: '20px' }}
    ></div>
  )
}

export default Pixel
