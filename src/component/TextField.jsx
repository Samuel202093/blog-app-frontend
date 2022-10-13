import React from 'react'
import {useField,ErrorMessage} from 'formik'

const TextField = ({className,...props}) => {
    const [field, meta] = useField(props)
    // console.log(props);
  return (
    <div className='flex flex-col'>
        <input
        {...field} {...props} 
        className={`${className} ${meta.error && meta.touched && 'border-red-800'}`}
         />
         <ErrorMessage component='span' name={field.name} className='text-red-700 text-[10px]'/>
    </div>
  )
}

export default TextField