import Pixel from './Pixel'

const pixels = Array(100).fill(<Pixel />)

function App() {
  return <>{...pixels}</>
}

export default App
