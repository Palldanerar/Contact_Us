import React from 'react'
import { useState } from "react"

const CreateContact = () => {
  const [newContactName, setNewContactName] = useState("")
  const [newContactPhoneNumber, setNewContactPhoneNumber] = useState("")
  const [newContactComment, setNewContactComment] = useState("")

  async function addContacts() {
    const data = {
      name: newContactName,
      phoneNumber: newContactPhoneNumber,
      comment: newContactComment
    }

    await fetch("http://localhost:3100/contacts", {
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
    <div>
      <input type="text" name='name' placeholder='Имя' onChange={e => setNewContactName(e.target.value)} value={newContactName}/>
      <input type="text" name='phoneNumber' placeholder='Номер телефона' onChange={e => setNewContactPhoneNumber(e.target.value)} value={newContactPhoneNumber}/>
      <input type="text" name='comment' placeholder='Комментарий' onChange={e => setNewContactComment(e.target.value)} value={newContactComment}/>
      <div>
        <button onClick={addContacts}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default CreateContact