import Pixel from './Pixel'

function App() {
  const pixelArr = Array(3000).fill('')
  return (
    <>
      {pixelArr.map((x, i) => (
        <Pixel key={i} />
      ))}
    </>
  )
}

export default App
