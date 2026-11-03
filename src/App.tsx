import { useState } from 'react'
import CardSlot from './components/cardSlot/cardSlot'
import { cards } from './data/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CardSlot card={cards[0]}></CardSlot>
  )
}

export default App
