import React, { useRef } from 'react'
import {IdleTimer} from 'react-idle-timer'

const ReactTimer = () => {
    const idleTimerRef = useRef(null)

    const onIdle = () => {
        console.log('User is Idle')
    }
  return (
    <div>
        <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default ReactTimer