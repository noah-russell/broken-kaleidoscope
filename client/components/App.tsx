import Pixel from './Pixel'

const pixels = Array(10000).fill(<Pixel />)

function App() {
  return <div style={{
    margin: 0
  }}>{...pixels}</div>
}

export default App
