import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateContact from "./pages/CreateContact"
import Navbar from './components/Navbar'
import EditContact from "./pages/EditContact"

function App() {

  return (
    <div className="w-full h-screen">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CreateContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
    </div>
  )
}

export default App
