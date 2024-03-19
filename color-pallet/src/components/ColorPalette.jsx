import React, { useState } from 'react'

const ColorPalette = () => {
  const [background, setBackground] = useState('#f4f4f4')

  const colors = [
    "rgba(0, 0, 255, 0.2)",
    "rgba(0, 0, 255, 0.3)",
    "rgba(0, 0, 255, 0.4)",
    "rgba(0, 0, 255, 0.5)",
    "rgba(0, 0, 255, 0.6)",
    "rgba(0, 255, 0, 0.2)",
    "rgba(0, 255, 0, 0.3)",
    "rgba(0, 255, 0, 0.4)",
    "rgba(0, 255, 0, 0.5)",
    "rgba(0, 255, 0, 0.6)",
    "rgba(255, 0, 0, 0.2)",
    "rgba(255, 0, 0, 0.3)",
    "rgba(255, 0, 0, 0.4)",
    "rgba(255, 0, 0, 0.5)",
    "rgba(255, 0, 0, 0.6)"
  ]

  return (
    <div>
      <div className='mainBack' style={{width: '80vw', height: '5rem', background: background, margin: '5rem auto'}}></div>
      <div style={{width: '80%', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', flexWrap: 'wrap'}}>
        {
          colors.map((color, index) => (<div key={index} className='animateStyle'
          style={{width: '100px', height: '100px', margin: '10px', background: color, borderRadius: '50%'}}
          onClick={() => setBackground(color)}>
            <div></div>
          </div>))
        }
      </div>
    </div>
  )
}

export default ColorPalette
