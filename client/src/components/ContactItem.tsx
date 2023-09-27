import React from 'react'
import { IContact } from '../interface/IContact'
import { useNavigate } from 'react-router-dom'

const ContactItem = ({_id, name, phoneNumber, comment}: IContact) => {

  const navigation = useNavigate()

  async function deleteContact(id: string) {
    await fetch(`http://localhost:3100/contact/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

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
        <div className='flex mt-3 justify-end'>
          <button onClick={() => navigation(`edit/${_id}`)} className="w-18 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 mr-4 rounded-full">
            Edit
          </button>
          <button onClick={() => deleteContact(_id)} className="w-18 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>

  )
}

export default ContactItem