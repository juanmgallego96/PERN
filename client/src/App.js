import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Navbar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Container from '@mui/material/Container';

export default function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Container>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path='/tasks/new/' element={<TaskForm/>}/>
          <Route path='/tasks/:id/edit' element={<TaskForm/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
