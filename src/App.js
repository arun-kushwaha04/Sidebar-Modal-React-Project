import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import {UseGlobal} from './context'
function App() {
  const data = UseGlobal();
  console.log(data)
  return (
    <>
      <Home/>
      <Modal />
      <Sidebar/>
    </>
  )
}

export default App
