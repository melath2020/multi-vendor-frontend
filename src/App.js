import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage,SignupPage } from './Routes'
import "./App.css"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
