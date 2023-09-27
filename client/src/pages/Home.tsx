import React from 'react'
import { useEffect, useState } from "react"
import ContactItem from '../components/ContactItem'

const Home = () => {

  const [contacts, setContacts] = useState([])

  async function getContacts() {
    const responce = await fetch("http://localhost:3100/contacts")
    const data = await responce.json()

    setContacts(data)
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <div className='p-4'>
      <div className='w-[1200px] h-auto flex justify-between flex-wrap mx-auto'>
        {contacts.map(contact => {
          return <ContactItem key={contact._id}
          _id={contact._id}
          name={contact.name} 
          phoneNumber={contact.phoneNumber} 
          comment={contact.comment}/>
        })}
      </div>
    </div>
  )
}

export default Home