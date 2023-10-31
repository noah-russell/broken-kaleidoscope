import Pixel from './pixel'

function App() {
  const pixArr = Array(100000).fill(<Pixel />)
  return <div>{pixArr}</div>

  // const pixArr = []
  // for (let x = 0; x < 10000; x++) {
  //   pixArr.push(
  //     <div>
  //       <Pixel />
  //     </div>
  //   )
  // }
  // return Array.from(pixArr)
}

export default App
