
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PostIndex from './PostIndex'
import PostCreate from './PostCreate'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PostIndex/>}> </Route>
        <Route path='/create' element={<PostCreate/>}></Route>
      </Routes>
    </>
  )
}

export default App
