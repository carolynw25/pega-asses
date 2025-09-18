import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Epics from './pages/Epics'
import Bugs from './pages/Bugs'
import Empty from './pages/Empty'
import Home from './pages/Home'

function App() {

  return (
    <>
    <title>Home Page</title>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/empty" element={<Empty/>} />
          <Route path="/bugs" element={<Bugs />} />
          <Route path="/epics" element={<Epics />} />
        </Routes>
      </main>
    </>
  )
}

export default App

// function App() {
//   return <h1>Test</h1>;
// }
// export default App;