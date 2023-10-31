import {useState} from 'react' 

function Pixel(){

    const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`
    const [color, setColor] = useState(getRandomColor)
    //console.log(color)
    // function handleClick(){
    //     setColor(getRandomColor)
    // }
    function handleMouseEnter(){
        setColor('#00FF00')
    }
    // function handleDoubleClick(){
    //     setColor('#000000')
    // }
    // function handleDragEnter(){
    //     setColor('#FFFF00')
    // }
    return  (
        <div 
            //onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            //onDoubleClick={handleDoubleClick}
            //onDragEnter={handleDragEnter}
            style={{
                fontFamily: 'Times New Roman', 
                background: color,
                width:'5px', 
                height:'5px', 
                }} 
            >
        </div>
    )
}
export default Pixel