import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ColorPalette from './components/ColorPalette'
import ColorPalette2 from './components/ColorPalette2'
import ColorPal from './components/ColorPal'
import ColorPalet from './components/ColorPalet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ColorPalet /> */}
      {/* <ColorPal /> */}
      {/* <ColorPalette/> */}
      <ColorPalette2 />
    </div>
  )
}

export default App
