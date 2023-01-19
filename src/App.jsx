import { useState } from 'react'

import './styles/App.css'
import Builds from './components/Builds'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Contact />
      <Builds />
    </div>
  )
}

export default App
