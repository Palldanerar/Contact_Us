import React from 'react'

const ContactItem = ({name, phoneNumber, comment}) => {
  return (
  
    <div className="relative h-auto flex w-96 flex-col rounded-xl mt-4 bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {phoneNumber}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit break-all antialiased">
          {comment}
        </p>
      </div>
    </div>

  )
}

export default ContactItem