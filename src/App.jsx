import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center'>
        <Navbar />
        <div className='text-4xl font-bold underline'>FutureFemTech</div>
        <LandingPage/>
      </div>

    </>
  )
}

export default App
