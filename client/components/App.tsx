//imports
import Pixel from './Pixel'

function App() {
  return (
    // pixel component
    <>{Array(100).fill(<Pixel />)}</>
  )
}

export default App
