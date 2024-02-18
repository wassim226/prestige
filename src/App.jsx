import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, Home, Landscape, Pool, Spa, Blog, Contact, Water } from './pages'
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
      </Routes>
    </BrowserRouter>
  );
}

export default App
