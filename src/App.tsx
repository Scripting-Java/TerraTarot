import { useState } from 'react'
import type { card } from './data/card'
import './App.css'
import CardSlot from './components/cardSlot/cardSlot'
import loadGame from './utils/loadGame'
import handleRoll from './utils/handleRoll'

function App() {
  const [slots, setSlots] = useState<(card | null)[]>(loadGame())
  const [slotIndex, setSlotIndex] = useState(0) // index
  function rollSlot() {
    setSlots(handleRoll(slots, slotIndex))
  }

  return (
    <>
      <button onClick={rollSlot}>Roll</button>
      <CardSlot slots={slots} slot={slotIndex} setSlot={setSlotIndex}></CardSlot>
    </>
  )
}

export default App
