import { useEffect, useState } from "react"
import ContactItem from '../components/ContactItem'
import { IContact } from "../interface/IContact"

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

  async function deleteContact(id: string) {

    setContacts(contacts.filter((contact: IContact) => contact._id != id))
    console.log(contacts)

    await fetch(`http://localhost:3100/contact/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className='p-4'>
      <div className='w-[1200px] h-auto flex justify-between flex-wrap mx-auto'>
        {contacts.map((contact : IContact) => {
          return <ContactItem key={contact._id}
          _id={contact._id}
          name={contact.name} 
          phoneNumber={contact.phoneNumber} 
          comment={contact.comment}
          deleteContact={deleteContact}/>
        })}
      </div>
    </div>
  )
}

export default Home