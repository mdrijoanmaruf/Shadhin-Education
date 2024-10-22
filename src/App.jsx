import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import BloodGroupProfiles from './Components/BloodGroupProfiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <BloodGroupProfiles/>
      <Footer/>
    </div>
  )
}

export default App
