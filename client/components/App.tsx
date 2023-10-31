import Pixel from './Pixel'

const pixels = Array(10000).fill(<Pixel />)

function App() {
  return <div>{...pixels}</div>
}

export default App
