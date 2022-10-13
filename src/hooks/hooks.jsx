import React, { useState } from 'react'

const useSooks = (submit_text,showSubmit_value) => {

    const [submit, setSubmit] = useState(`${submit_text}`)
    const [showSubmit, setShowSubmit] = useState(showSubmit_value)
    const handleShowSubmit = (boolean=false) => {
        setShowSubmit(boolean)
    }

    const handleSubmit = (string) => {
        setSubmit(`${string}`)
    }
  return [ submit, handleShowSubmit, handleSubmit, showSubmit]
}

export default useSooks