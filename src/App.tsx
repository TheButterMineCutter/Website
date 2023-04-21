import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Home } from './components/Pages/Home'
import { Projects } from './components/Pages/Projects'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
    </ParallaxProvider>
  )
}

export default App
