import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Components/Header'
import Home from './Pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}  />
    </Routes>
    </BrowserRouter>

  
  )
}
