import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateContact from "./pages/CreateContact"
import Navbar from './components/Navbar'

function App() {
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
    <div className="w-full h-screen">
        <div className="w-[1200px] h-auto m-auto my-4">
          <h1 className="text-2xl">My Contacts</h1>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CreateContact />} />
        </Routes>
      </div>
  )
}

export default App
