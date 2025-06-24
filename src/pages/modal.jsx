import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='fixed inset-0 z-100 bg-gray-900 opacity-90 flex justify-center items-center'>
        {children}
    </div>
  )
}

export default Modal