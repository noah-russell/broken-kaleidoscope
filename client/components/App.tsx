import Pixel from './Pixel'

function App() {
  const pixelArr = Array(200).fill(<Pixel />)

  return <>{pixelArr}</>
}

export default App
