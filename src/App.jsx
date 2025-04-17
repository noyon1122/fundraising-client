
import './App.css'

import { Outlet, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <div>
       <Navbar></Navbar>
      <Outlet></Outlet>
    
    </div>
  )
}

export default App
