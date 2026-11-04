import { useState } from 'react'
import type { card } from './data/card'
import './App.css'
import CardSlot from './components/cardSlot/cardSlot'
import loadGame from './utils/loadGame'
import handleRoll from './utils/handleRoll'

function App() {
  const [slots, setSlots] = useState<(card | null)[]>(loadGame())
  const [slotIndex, setSlotIndex] = useState(0) 
  const [rollNum, setRollNum] = useState(0)

  function rollSlot() {
    const pity = rollNum<50
    let newSlot
    if(pity){
      newSlot = handleRoll(slots, slotIndex, false)
      setSlots(newSlot)    
      setRollNum(rollNum+1)
          if(newSlot[slotIndex]?.rarity==="epic"||newSlot[slotIndex]?.rarity==="legendary")
            setRollNum(0)
    }
    else{
      setRollNum(0)
      setSlots(handleRoll(slots,slotIndex,true))
    }
  }

  return (
    <>
      <h1>Terra Tarot</h1>
      <p>Roll spooky characters to make money</p>
      <h2>This game DOES NOT ENDORSE GAMBLING IN ANY WAY</h2>
      <h3>All statistics/chances are visible in the side menu(in progress)</h3>
      <button onClick={rollSlot}>Roll</button>
      <CardSlot slots={slots} slot={slotIndex} setSlot={setSlotIndex}></CardSlot>
    </>
  )
}

export default App
