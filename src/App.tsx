import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Pages/Home'
import { Projects } from './components/Pages/Projects'
import { About } from './components/Pages/About'
import { Contacts } from './components/Pages/Contacts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>
  )
}

export default App
