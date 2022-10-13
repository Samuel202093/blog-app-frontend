import React from 'react'
import SaveBlogs from './SaveBlogs'
import UploadBlogs from './Upload Section/UploadBlogs'

const SaveUpload = () => {
  return (
    <div className='grid grid-cols-1 grid-rows-2 gap-y-1 h-[100vh] lg:h-[100vh]'>
       <SaveBlogs/>
       {/* <UploadBlogs/> */}
    </div>
  )
}

export default SaveUpload