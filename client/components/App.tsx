import Pixel from './Pixel'

const pixels = Array(100).fill(<Pixel />)

function App() {
  return <div>{...pixels}</div>
}

export default App
