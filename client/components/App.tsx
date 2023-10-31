import Pixel from './Pixel'

function App() {
  const pixelArray = Array(250).fill(<Pixel />)

  return <div>{pixelArray}</div>
}

export default App
