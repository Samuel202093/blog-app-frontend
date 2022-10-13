import React, {forwardRef} from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';



const TextArea =forwardRef((props, ref) => {
    const {onChange,required,validation,...textData} = props
    const [focused, setFocused] = useState('false')
    const handleFocus = () => {
        setFocused(!focused)
    }
  return (
    <div>
      <TextareaAutosize ref={ref} onChange={onChange} required={required} {...textData} onBlur={handleFocus} focused={focused.toString()} onMouseLeave={handleFocus} />
      <span className='text-[12px] text-red-800 hidden'>{validation}</span>
      
    </div>
  )
})

export default TextArea