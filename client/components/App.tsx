import Pixel from './Pixel'

function App() {
  const result = []
  while(result.length < 100000){ 
    result.push(<Pixel />)
  }

  return result
}

export default App

