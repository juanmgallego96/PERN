import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route paths="/" element={<TaskList/>}/>
      </Routes>
    </BrowserRouter>
  )
}
