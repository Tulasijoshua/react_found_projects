import React from 'react'
import CountUp, { useCountUp } from 'react-countup'

const Countup = () => {

    const {countUp, start} = useCountUp({duration: 5, end: 10000})

  return (
    <div>
        {/* <div>
            <h1>{countUp} </h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/ Resume</button>
            <button onClick={() => update(2000)}>Update to 2000</button>
        </div> */}
        <h1>
            <CountUp end={200} />
        </h1>
        <br />
        <h1>
            <CountUp end={200} duration={5} />
        </h1>
        <br />
        <h1>
            <CountUp start={500} end={1000}  duration={5} />
        </h1>

        <h1>
            <CountUp end={1000}  duration={5} prefix='$' decimals={2} />
        </h1>

        <h1>
            <CountUp end={1000}  duration={5} suffix='USD' decimals={2} />
        </h1>

    </div>
  )
}

export default Countup