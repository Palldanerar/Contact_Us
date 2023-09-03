import React from 'react'
import { useEffect, useState } from "react"
import ContactItem from '../components/ContactItem'

const Home = () => {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function getContacts() {
      const responce = await fetch("http://localhost:3100/contacts")
      const data = await responce.json()

      setContacts(data)
    }

    getContacts()
  })

  return (
    <>
      <h2>Мои контакты</h2>
      <div>
        {contacts.map(contact => {
          return <ContactItem key={contact.phoneNumber} name={contact.name} phoneNumber={contact.phoneNumber} comment={contact.comment}/>
        })}
      </div>
    </>
  )
}

export default Home