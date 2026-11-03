import { useState } from 'react'
import { cards } from './data/card'
import './App.css'
import CardSlot from './components/cardSlot/cardSlot'

function App() {
  const [count, setCount] = useState(0)
  const slots = [cards[0],null,cards[7],null]
  return (
    <CardSlot slots={slots}></CardSlot>
  )
}

export default App
