import React, {useState, useEffect} from 'react'

const ColorPal = () => {
    const colors = [
        "#9257af",
        "#f063a4",
        "#20e5f4",
        "#fcee21",
        "#f16164",
        "#70327e",
        "#a42963",
        "#0bfa34",
        "#f89e4f",
        "#ec015a"
    ]

    const [current, setCurrent] = useState(null)
    const [background, setBackground] = useState("#000")
  return (
    <div>
      <div style={{width: '80vw', height: '5rem', background: background, margin: '0 auto'}}></div>
      <div style={{width: '500px',height: '50vh', display: 'flex', justifyContent: 'spaceBetween', flexWrap: 'wrap'}}>
      {colors.map((color, index) =>(
        <div key={index} style={{width: '100px', height: '100px', margin: '10px', background: color}}
        onClick={() => setBackground(color)}>
        </div>
      ) )}
      </div>
    </div>
  )
}

export default ColorPal
