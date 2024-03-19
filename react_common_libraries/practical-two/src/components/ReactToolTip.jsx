import React, {forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
  return <span style={{color: 'yellow'}}>Colored component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
}) 

const ReactToolTip = () => {
  return (
    <div>
      <div style={{paddingBottom: '20px'}}>
        <Tippy content='Basic Tooltip' >
            <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <Tippy content={<span style={{color: 'orange'}}>Colored</span>} >
            <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>} >
            <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px', display: 'flex', alignItems: 'left'}}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>} style={{textAlign: 'left'}} >
            <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  )
}

export default ReactToolTip