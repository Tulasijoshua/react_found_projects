import { useState } from 'react'
import './App.css'
import ReactModal from './components/ReactModal'
import ReactToolTip from './components/ReactToolTip'
import ReactToolTip2 from './components/ReactToolTip2'
import Countup from './components/Countup'
import ReactTimer from './components/ReactTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ReactModal /> */}
      {/* <ReactToolTip /> */}
      {/* <ReactToolTip2 /> */}
      {/* <Countup /> */}
      <ReactTimer />
    </>
  )
}  

export default App
