import { useState } from 'react'
import QuoteBox from './components/QuoteBox'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <QuoteBox />
    </div>
  )
}

export default App
