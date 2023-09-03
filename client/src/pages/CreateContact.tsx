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
    <div className='flex flex-col'>
      <input className='w-[600px] text-2xl border rounded-lg border-green-300 p-2 mb-5' type="text" name='name' placeholder='Имя' onChange={e => setNewContactName(e.target.value)} value={newContactName}/>
      <input className='w-[600px] text-2xl border rounded-lg border-green-300 p-2 mb-5' type="text" name='phoneNumber' placeholder='Номер телефона' onChange={e => setNewContactPhoneNumber(e.target.value)} value={newContactPhoneNumber}/>
      <input className='w-[600px] text-2xl border rounded-lg border-green-300 p-2 mb-5' type="text" name='comment' placeholder='Комментарий' onChange={e => setNewContactComment(e.target.value)} value={newContactComment}/>
      <div>
        <button className='w-[200px] h-auto bg-green-500 text-white text-xl px-1 py-3 rounded-lg' onClick={addContacts}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default CreateContact