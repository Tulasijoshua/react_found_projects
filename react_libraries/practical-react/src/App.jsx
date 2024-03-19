import { useState } from 'react'
import './App.css'
import ReactIcons from './components/ReactIcons'
import ToastNotification from './components/ToastNotification'
import ReactModal from './components/ReactModal'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
Modal.setAppElement('#root');

// toast.configure()
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      {/* <ReactIcons /> */}
      <ToastNotification />
      {/* <ReactModal /> */}
      </>
  )
}

export default App
