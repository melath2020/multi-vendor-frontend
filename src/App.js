import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './Routes'
import "./App.css"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
