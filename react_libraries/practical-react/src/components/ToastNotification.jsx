import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastNotification = () => {

  const notify = () => {
    toast('Basic notification!')
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  )
}

export default ToastNotification
