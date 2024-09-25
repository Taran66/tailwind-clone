import './App.css'
import LandingPage from './section/LandingPage'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './section/About'

export default function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>

    </Router>
   
    </>
  
  )
}
