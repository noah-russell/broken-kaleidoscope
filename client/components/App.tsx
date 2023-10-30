import { Pixel } from './Pixel'

function App() {
  const pixelArray = Array(20000).fill(<Pixel />)
  return <div>{[pixelArray]}</div>
}

export default App
