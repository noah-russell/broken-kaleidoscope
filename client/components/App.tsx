//imports
import Pixel from './Pixel'

function App() {
  return (
    // pixel component
    <>{Array(800).fill(<Pixel />)}</>
  )
}

export default App
