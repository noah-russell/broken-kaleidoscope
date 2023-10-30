import {useState} from 'react' 

function Pixel(){

    const [color, setColor] = useState('#24C8F0')
    console.log(color)
    return  (
        <div 
            style={{
                fontFamily: 'Times New Roman', 
                background: color,
                width:'100px', 
                height:'100px', 
                }}> 
        </div>
    )
}
export default Pixel