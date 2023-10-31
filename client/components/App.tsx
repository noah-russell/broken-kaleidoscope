import Pixel from './Pixel'

function App() {
  const pixelArr = Array.from({ length: 10000 })

  return (
    <>
      {pixelArr.map((pixel, i) => (
        <Pixel key={i} />
      ))}
    </>
  )
}

export default App
