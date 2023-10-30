import Pixel from './Pixel'


const pixelArr = Array(201).fill('')



function App() {
  

  return (
    <>
      {pixelArr.map((td,i) => (
        <Pixel key={i}/>
      ))}
      
    </>
  )
}

export default App
