import Pixel from './Pixel'

function App() {
  const pixelArr = Array(10000).fill('')
  return (
    <>
      {pixelArr.map((x, i) => (
        <Pixel key={i} />
      ))}
    </>
  )
}

export default App
