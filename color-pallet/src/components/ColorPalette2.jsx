import React, {useState, useEffect} from 'react'

const ColorPalette2 = () => {
  const [background, setBackground] = useState('rgba(255, 0, 233, 0.8)')
  const [colors, setColors] = useState([])

  useEffect(() => {
    const rows = []
    for(let i = 0; i < 3; i++) {
      let colorGradient = []
      if(i === 0) {
        colorGradient = [
          'rgba(0, 0, 0, 0.9)',
          'rgba(0, 0, 0, 0.7)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.3)',
          'rgba(0, 0, 0, 0.1)'
        ]
      } else if(i === 1) {
        colorGradient = [
          'rgba(255, 0, 0, 0.9)',
          'rgba(255, 0, 0, 0.7)',
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 0, 0, 0.3)',
          'rgba(255, 0, 0, 0.1)'
        ]
      } else if(i === 2) {
        colorGradient = [
          'rgba(0, 255, 0, 0.9)',
          'rgba(0, 255, 0, 0.7)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(0, 255, 0, 0.3)',
          'rgba(0, 255, 0, 0.1)'
        ]
      }
      rows.push(colorGradient)
      console.log(rows)
    }

    setColors([...rows])
  }, [])

  const GradientCol = () => {
    return (
      <div style={{margin: '15rem 0'}}>
        {
          colors.map((color, index) => {
            return (
              <div key={index} style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px auto'}}>
                {
                  color.map((item, indexx) => {
                    return (
                      <div key={indexx} style={{width: '5rem', height: '5rem', background: item, marginRight: '2rem'}}
                      onClick={() => setBackground(item)}></div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div>
      <div style={{width: '80vw', height: '5rem', background: background, margin: '0 auto'}}></div>
      <GradientCol />
    </div>
  )
}

export default ColorPalette2
