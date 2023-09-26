import React from 'react'
import { useState } from "react"

const CreateContact = () => {
  const [newContactName, setNewContactName] = useState("")
  const [newContactPhoneNumber, setNewContactPhoneNumber] = useState("")
  const [newContactComment, setNewContactComment] = useState("")

  async function addContacts() {

    if (!newContactName || !newContactPhoneNumber || !newContactComment) {
      alert("Неверно указаны данные!")
      return
    }

    const data = {
      name: newContactName,
      phoneNumber: newContactPhoneNumber,
      comment: newContactComment
    }

    await fetch("http://localhost:3100/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    setNewContactName("")
    setNewContactPhoneNumber("")
    setNewContactComment("")
  }

  return (
    <div className='w-full h-[675px] bg-gray-800 p-4'>
      <form className='w-[600px] h-auto mx-auto'>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number phone</label>
          <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number phone..." required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your comment</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
  )
}

export default CreateContact