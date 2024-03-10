import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, Home, Landscape, Pool, Spa, Blog, Contact, Water, ControlePanel, Dashboard, ControleArticale, ControleSpa, ControleMessage, Users, ArticaleDetail, SpaDetail, MessageDetail, UserDetail } from './pages'
import { BlogArticale } from './components'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='landscape/:ind' element={<Landscape/>}></Route>
          <Route path='pool' element={<Pool/>}></Route>
          <Route path='spa' element={<Spa/>} initialIndex={0}></Route>
          <Route path='water' element={<Water/>}></Route>
          <Route path='blog' element={<Blog/>}></Route>
          <Route path='articale/:id' element={<BlogArticale/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Route>
        <Route path="/controle" 
          element={<ControlePanel/>}>
            {/* loged ? <Layout setloged={setloged}/> : <div className={`flex justify-center items-center w-full h-[100vh] bg-primary`}><Login setloged={setloged}/></div> */}
            <Route index  element={<Dashboard/>}></Route>
            <Route path='articales'>
              <Route index element={<ControleArticale/>}></Route>
              <Route path='detail/:id' element={<ArticaleDetail/>}></Route>
            </Route>
            <Route path='spas'>
              <Route index element={<ControleSpa/>}></Route>
              <Route path='detail/:id' element={<SpaDetail/>}></Route>
            </Route>
            <Route path='message'>
              <Route index element={<ControleMessage/>}></Route>
              <Route path='detail/:id' element={<MessageDetail/>}></Route>
            </Route>
            <Route path='user'>
              <Route index element={<Users/>}></Route>
              <Route path='detail/:id' element={<UserDetail/>}></Route>
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
