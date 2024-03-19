import React, {useState, useEffect} from 'react'

const ColorPalet = () => {
  const [background, setBackground] = useState("rgba(0, 0, 255, .7)")
  const [colors, setColors] = useState([])

  useEffect(() => {
    const rows = []
    for(let i = 0; i < 3; i++) {
      let gradientColors = []
      if(i === 0) {
        gradientColors = [
          'rgba(0, 0, 255, 0)',
          'rgba(0, 0, 255, 0.8)',
          'rgba(0, 0, 255, 0.6)',
          'rgba(0, 0, 255, 0.4)',
          'rgba(0, 0, 255, 0.2)'
        ]
      } else if(i === 1) {
        gradientColors = [
          'rgba(255, 0, 0, 0)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.6)',
          'rgba(255, 0, 0, 0.4)',
          'rgba(255, 0, 0, 0.2)'
        ]
      } else if(i === 2) {
        gradientColors = [
          'rgba(0, 255, 0, 0)',
          'rgba(0, 255, 0, 0.8)',
          'rgba(0, 255, 0, 0.6)',
          'rgba(0, 255, 0, 0.4)',
          'rgba(0, 255, 0, 0.2)'
        ]
      }
      rows.push(gradientColors)
    }
    setColors([...rows])
  }, [])

  const ColorGradient = () => {
    return (
      <div>
        {
          colors.map((color, index) => {
            return (
              <div key={index} style={{display: 'flex'}}>
                {
                  color.map((item, indexx) => {
                    return (
                      <div key={indexx} onClick={() => setBackground(item)} 
                      style={{width: '100px', height: '100px', margin: '1rem', background: item}}></div>
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
      <div style={{width: '80vw', height: '5rem', margin: '0 auto', background: background}}></div>
      <ColorGradient />
    </div>
  )
}

export default ColorPalet
