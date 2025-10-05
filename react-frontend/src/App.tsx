
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PostIndex from './PostIndex'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PostIndex/>}> </Route>
        <Route path='/create' element={<PostCreate/>}></Route>
        <Route path='/edit/:id' element={<PostEdit/>}></Route>
      </Routes>
    </>
  )
}

export default App
