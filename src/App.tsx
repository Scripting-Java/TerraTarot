import { useState, useEffect } from 'react'
import type { card } from './data/card'
import './App.css'
import CardSlot from './components/cardSlot/cardSlot'
import loadGame from './utils/loadGame'
import handleRoll from './utils/handleRoll'
import { getRollCost, start, getIncomeCards } from './data/money'
import formatMoney from './utils/moneyFormatter'
import { fuseCards, canFuse } from './utils/fusion'

function App() {
  const [slots, setSlots] = useState<(card | null)[]>(loadGame())
  const [slotIndex, setSlotIndex] = useState(0)
  const [rollNum, setRollNum] = useState(0)
  const [totRolls, setTotRolls] = useState(0)
  const [pumpkin, setPumpkin] = useState(start)
  const [rollMode, setRollMode] = useState("count")
  const [rollCounter, setRollCounter] = useState(1)
  const rollModes = ["count", "max", "allCount", "allMax"]
  const [rollCount, setRollCount] = useState(1)
  const [prevRolls, setPrevRolls] = useState(0)
  function rollSlot() {
    const notPity = rollNum < 49
    setPumpkin(pumpkin - getRollCost(totRolls))
    let newSlot
    if (notPity) {
      newSlot = handleRoll(slots, slotIndex, false)
      setSlots(newSlot)
      setRollNum(rollNum + 1)
      if (newSlot[slotIndex]?.rarity === "epic" || newSlot[slotIndex]?.rarity === "legendary")
        setRollNum(0)
    }
    else {
      setRollNum(0)
      setSlots(handleRoll(slots, slotIndex, true))
    }
    setTotRolls(totRolls + 1)
    setPrevRolls(totRolls)
  }
  function rollAll() {
    let newSlots = [...slots]
    let tempRollNum = rollNum
    let tempTotRoll = totRolls
    let tempPumpkin = pumpkin
    for (let i = 0; i < 4; i++) {
      const pity = tempRollNum < 49
      if (pity) {
        newSlots = handleRoll(newSlots, i, false)
        tempRollNum++
        if (newSlots[i]?.rarity === "epic" || newSlots[i]?.rarity === "legendary")
          tempRollNum = 0
      }
      else {
        tempRollNum = 0
        newSlots = handleRoll(newSlots, i, true)
      }
      tempPumpkin -= getRollCost(tempTotRoll)
      tempTotRoll++
    }
    setSlots(newSlots)
    setTotRolls(tempTotRoll)
    setRollNum(tempRollNum)
    setPumpkin(tempPumpkin)
    setPrevRolls(totRolls)
  }
  function rollMax() {
    let newSlots = [...slots]
    let tempRollNum = rollNum
    let tempTotRoll = totRolls
    let tempPumpkin = pumpkin
    if (rollMode === "max") {
      while (tempPumpkin >= getRollCost(tempTotRoll)) {
        const notPity = tempRollNum < 49
        if (notPity) {
          newSlots = handleRoll(newSlots, slotIndex, false)
          tempRollNum++

          if (newSlots[slotIndex]?.rarity === "epic" || newSlots[slotIndex]?.rarity === "legendary")
            tempRollNum = 0
        }
        else {
          tempRollNum = 0
          newSlots = handleRoll(newSlots, slotIndex, true)
        }
        tempPumpkin -= getRollCost(tempTotRoll)
        tempTotRoll++
      }
      setSlots(newSlots)
      setRollNum(tempRollNum)
      setTotRolls(tempTotRoll)
      setPumpkin(tempPumpkin)
    }
    else if (rollMode === "count") {
      let i = 0
      while (i < rollCount && tempPumpkin >= getRollCost(tempTotRoll)) {
        const notPity = tempRollNum < 49
        if (notPity) {
          newSlots = handleRoll(newSlots, slotIndex, false)
          tempRollNum++

          if (newSlots[slotIndex]?.rarity === "epic" || newSlots[slotIndex]?.rarity === "legendary")
            tempRollNum = 0
        }
        else {
          tempRollNum = 0
          newSlots = handleRoll(newSlots, slotIndex, true)
        }
        tempPumpkin -= getRollCost(tempTotRoll)
        tempTotRoll++
        i++
      }
      setSlots(newSlots)
      setRollNum(tempRollNum)
      setTotRolls(tempTotRoll)
      setPumpkin(tempPumpkin)
    }
    else if (rollMode === "allCount") {
      let tempIndex = 0
      let i = 0
      while (i < rollCount && tempPumpkin >= getRollCost(tempTotRoll)) {
        const notPity = tempRollNum < 49
        if (notPity) {
          newSlots = handleRoll(newSlots, tempIndex, false)
          tempRollNum++

          if (newSlots[tempIndex]?.rarity === "epic" || newSlots[tempIndex]?.rarity === "legendary")
            tempRollNum = 0
        }
        else {
          tempRollNum = 0
          newSlots = handleRoll(newSlots, tempIndex, true)
        }
        if (tempIndex < 3)
          tempIndex++
        else
          tempIndex = 0
        tempPumpkin -= getRollCost(tempTotRoll)
        tempTotRoll++
        i++
      }
      setSlots(newSlots)
      setRollNum(tempRollNum)
      setTotRolls(tempTotRoll)
      setPumpkin(tempPumpkin)
    }
    else if (rollMode === "allMax") {
      let tempIndex = 0
      while (tempPumpkin >= getRollCost(tempTotRoll)) {
        const notPity = tempRollNum < 49
        if (notPity) {
          newSlots = handleRoll(newSlots, tempIndex, false)
          tempRollNum++
          if (newSlots[tempIndex]?.rarity === "epic" || newSlots[tempIndex]?.rarity === "legendary")
            tempRollNum = 0
        }
        else {
          tempRollNum = 0
          newSlots = handleRoll(newSlots, tempIndex, true)
        }
        if (tempIndex < 3)
          tempIndex++
        else
          tempIndex = 0
        tempPumpkin -= getRollCost(tempTotRoll)
        tempTotRoll++
      }
      setSlots(newSlots)
      setRollNum(tempRollNum)
      setTotRolls(tempTotRoll)
      setPumpkin(tempPumpkin)
    }
    setPrevRolls(totRolls)
  }
  function fuse() {
    let newSlots = [...slots]
    for (let i = 0; i < slots.length; i++) {
      for (let j = i + 1; j < slots.length; j++) {
        if (canFuse(newSlots[i], newSlots[j])) {
          const card1 = newSlots[i]
          const card2 = newSlots[j]
          if (card1 !=null && card2 != null) {
            const temp = fuseCards(card1,card2)
            newSlots[i] = temp
            newSlots[j] = null
          }
        }
      }
    }
    setSlots(newSlots)
  }

  useEffect(() => {
    const int = setInterval(() => { setPumpkin(prev => prev + getIncomeCards(slots)) }, 1000)
    return () => clearInterval(int)
  }, [slots])

  return (
    <>
      <h1>Terra Tarot</h1>
      <p>Roll spooky characters to make pumpkins</p>
      <h2>This game DOES NOT ENDORSE GAMBLING IN ANY WAY</h2>
      <h3>All statistics/chances are visible in the side menu(in progress)</h3>
      <h2>Pumpkin: {formatMoney(pumpkin)}</h2>
      <h2>Lifetime Rolls: {totRolls}</h2>
      <div>
        <button onClick={rollSlot} disabled={pumpkin < getRollCost(totRolls)}>Roll (Cost:{formatMoney(getRollCost(totRolls))}) Pumpkins</button>
        <button onClick={rollAll} disabled={pumpkin < (getRollCost(totRolls) + getRollCost(totRolls + 1) + getRollCost(totRolls + 2) + getRollCost(totRolls + 3))}>Roll All (Cost: {formatMoney(getRollCost(totRolls) + getRollCost(totRolls + 1) + getRollCost(totRolls + 2) + getRollCost(totRolls + 3))}) Pumpkins</button>
      </div>
      <button onClick={fuse}>Fuse</button>
      <button onClick={() => { setRollMode(rollModes[rollCounter % 4]), setRollCounter(rollCounter + 1), setPrevRolls(totRolls) }}>{rollMode}</button>
      {rollMode === "count" || rollMode === "allCount" ? (
        <input type="number" value={rollCount} onChange={(n) => { setRollCount(Number(n.target.value)), setPrevRolls(totRolls) }} />
      ) : (null)}
      <button onClick={rollMax}>Roll Max or your condition</button>
      {rollMode === "count" || rollMode === "allCount" ? (
        <p>{totRolls - prevRolls}/{rollCount} rolls were performed</p>
      ) : (
        <p>{totRolls - prevRolls} rolls were performed</p>)}
      <p>Pity: {rollNum}/50</p>
      <CardSlot slots={slots} slot={slotIndex} setSlot={setSlotIndex}></CardSlot>
      <div></div>
    </>
  )
}

export default App
