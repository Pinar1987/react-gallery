import { useState } from "react"

const ColorPicker = ()  => {

    const [selectedColor, setSelectedColor] = useState("#8a2be2")

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value)
    }

    return(
        <div style={{textAlign: "center", marginTop : "50px"}}>
            <h2>Color Picker</h2>

            <input 
                type="color"
                style={{margin:"20px"}} 
                value={selectedColor}    
                onChange={handleColorChange}  
            />

            <div
                style={{
                    width: "100px",
                    height: "100px",
                    border:"1px solid #000",
                    margin: "30px auto",
                    backgroundColor: selectedColor
                }}
            ></div>
            <p>Picked Color : {selectedColor}</p>
        </div>
    )
}

export default ColorPicker