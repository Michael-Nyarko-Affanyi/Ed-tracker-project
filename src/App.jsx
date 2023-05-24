import React from 'react'
import './App.css'
import Router from './router/Router'
import app from './Firebase'
app
function App() {

  return (
    <div className=" bg-blue-50 w-full">
      <Router />
    </div>
  )
}

export default App
