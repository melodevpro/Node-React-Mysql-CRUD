
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PostIndex from './PostIndex'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PostIndex/>}> </Route>
      </Routes>

    </>
  )
}

export default App
