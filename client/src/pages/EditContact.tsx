import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IContact } from '../interface/IContact'

const EditContact = () => {

    const stateInit = {
        _id: "",
        name: "",
        phoneNumber: "",
        comment: ""
      }
    
    const { id } = useParams()
    const [contact, setContact] = useState<IContact>(stateInit)
    const navigation = useNavigate()

    async function getContact() {
        const responce = await fetch(`http://localhost:3100/contact/${id}`)
        const data = await responce.json()
        setContact(data)
    }

    useEffect(() => {
        getContact()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact({
          ...contact,
          [name]: value,
        });
      };

      async function addContacts(e: React.FormEvent<EventTarget>) {

        e.preventDefault()
    
        await fetch(`http://localhost:3100/contact/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contact)
        })
    
        navigation("/")
      }

  return (
    <div className='p-4'>
      <form className='w-[600px] h-auto mx-auto'>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" value={contact.name} onChange={handleChange} name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." required />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number phone</label>
          <input type="text" id="phone" value={contact.phoneNumber} onChange={handleChange} name='phoneNumber'className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number phone..." required />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your comment</label>
          <textarea id="comment" value={contact.comment} onChange={handleChange} name='comment' rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" onClick={addContacts} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default EditContact