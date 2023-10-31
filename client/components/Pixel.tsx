import {useState} from 'react' 

function Pixel(){

    const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`
    const [color, setColor] = useState(getRandomColor)
    //console.log(color)
    function handleClick(){
        setColor(getRandomColor)
    }
    return  (
        <div 
            onClick={handleClick}
            style={{
                fontFamily: 'Times New Roman', 
                background: color,
                width:'100px', 
                height:'100px', 
                }} 
            >
        </div>
    )
}
export default Pixel