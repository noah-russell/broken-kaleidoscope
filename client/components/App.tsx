import Pixel from './Pixel'

const pixels = Array(15792).fill(<Pixel />)

function App() {
  return <>{...pixels}</>
}

export default App
