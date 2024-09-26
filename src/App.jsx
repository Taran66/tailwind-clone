import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './section/About'
import DropPage from './section/DropPage'

export default function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<DropPage/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>

    </Router>
   
    </>
  
  )
}
