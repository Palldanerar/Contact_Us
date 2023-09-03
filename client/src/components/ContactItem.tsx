import React from 'react'

const ContactItem = ({name, phoneNumber, comment}) => {
  return (
    <div className='w-600px h-auto p-4 rounded-lg border-green-300 text-2xl'>
        <div className='w-full h-auto flex justify-between'>
            <h1>{name}</h1>
            <h2>{phoneNumber}</h2>
        </div>
        <div>
            {comment}
        </div>
    </div>
  )
}

export default ContactItem