import Pixel from './pixel'

function App() {
  const pixArr = Array(5000).fill(<Pixel />)
  return (
    <div>
    {pixArr}
    </div>
  )
}

export default App
