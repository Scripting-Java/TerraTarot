import { useState } from 'react'
import { cards } from './data/card'
import type { card } from './data/card'
import './App.css'
import CardSlot from './components/cardSlot/cardSlot'
import loadGame from './utils/loadGame'

function App() {
  const [slots, setSlots] = useState<(card|null)[]>(loadGame())
  const [slot,setSlot] = useState(0)
  
  return (
    <CardSlot slots={slots} slot = {slot} setSlot={setSlot}></CardSlot>
  )
}

export default App
