
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Docter from './pages/Docter'
import Login from './pages/Login'
import About from './pages/About'
import Context from './pages/Context'
import MyProfile from './pages/MyProfile'
import Apportment from './pages/Apportment'
import Navebar from './components/Navebar'
import MyApportment from './pages/MyApportment'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' mx-4 sm:mx-[10%]'>
      <Navebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Docter/>}/>
        <Route path='/doctors/:speciality' element={<Docter/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Context/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/apportment' element={<MyApportment/>} />
        <Route path='/apportment/:docId' element={<Apportment/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App