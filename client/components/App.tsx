import Pixel from './Pixel'

const pixels = Array(3500).fill(<Pixel />)

function App() {
  return <>{...pixels}</>
}

export default App
