import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateContact from "./pages/CreateContact"
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="w-full h-screen">
        <div className="w-[1200px] h-auto m-auto my-4">
          <h1 className="text-2xl">My Contacts</h1>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<CreateContact />} />
          </Routes>
        </div>
      </div>
  )
}

export default App
