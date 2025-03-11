import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
      {/* Other components or content */}
    </>
  )
}

export default App
