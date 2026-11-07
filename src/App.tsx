import { useState, useEffect } from 'react'
import type { card } from './data/card'
import './App.css'
import CardSlot from './components/cardSlot/cardSlot'
import loadGame from './utils/loadGame'
import handleRoll from './utils/handleRoll'
import { getRollCost, start, getIncomeCards } from './data/money'
import formatMoney from './utils/moneyFormatter'
import { fuseCards, canFuse } from './utils/fusion'
import pumpkinImg from '../src/assets/pumpkin.png'
import Sidebar from './components/sidebar/sidebar'
import Statbar from './components/sidebar/Statbar'

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
  const [stats, setStats] = useState(false)

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
          if (card1 != null && card2 != null) {
            const temp = fuseCards(card1, card2)
            newSlots[i] = temp
            newSlots[j] = null
          }
        }
      }
    }
    setSlots(newSlots)
  }
  function rollModeText(mode: string) {
    if (mode === "count")
      return "Roll For This Many Times"
    else if (mode === "max")
      return "Roll As Many Times As Possible"
    else if (mode === "allCount")
      return "Roll This Amount Across All Slots"
    else if (mode === "allMax")
      return "Roll As Many Times As Possible Across All Slots"
  }

  useEffect(() => {
    const int = setInterval(() => { setPumpkin(prev => prev + getIncomeCards(slots)) }, 1000)
    return () => clearInterval(int)
  }, [slots])

  return (
    <>
      <h1 className='title'>Terra Tarot</h1>
      <h2>Roll spooky characters for pumpkins</h2>
      <h2>This game DOES NOT ENDORSE GAMBLING IN ANY WAY</h2>
      <h3>Click on the statistics button on the sidebar to view chances</h3>
      <div className='pumpkinImg'>
        <img src={pumpkinImg} className='pumpkin' />
        <h2>{formatMoney(pumpkin)}</h2>
      </div>

      <div className='displays'>
        <p className={rollNum >= 49 ? 'pityP' : 'noPityP'}>Pity: {rollNum + 1}/50</p>
        <p className={rollNum >= 49 ? 'pityP' : 'noPityP'}>Lifetime Rolls: {totRolls}</p>
      </div>

      <div className='actions'>
        <details className='rollMenu'>
          <summary>Roll Menu</summary>
          <div>
            <button className={rollNum >= 49 ? 'pity' : 'noPity'} onClick={rollSlot} disabled={pumpkin < getRollCost(totRolls)}>Roll (Cost:{formatMoney(getRollCost(totRolls))} Pumpkins)</button>
            <button className={rollNum >= 49 ? 'pity' : 'noPity'} onClick={rollAll} disabled={pumpkin < (getRollCost(totRolls) + getRollCost(totRolls + 1) + getRollCost(totRolls + 2) + getRollCost(totRolls + 3))}>Roll All (Cost: {formatMoney(getRollCost(totRolls) + getRollCost(totRolls + 1) + getRollCost(totRolls + 2) + getRollCost(totRolls + 3))}) Pumpkins</button>
            <div className='rollCond'>
              <button onClick={rollMax} className={rollNum >= 49 ? 'pity' : 'noPity'}>Roll Condition</button>
              <details>
                <summary className='condMenu'>Condition:</summary>
                <button className='condMenu' onClick={() => { setRollMode(rollModes[rollCounter % 4]), setRollCounter(rollCounter + 1), setPrevRolls(totRolls) }}>{rollModeText(rollMode)}</button>
                {rollMode === "count" || rollMode === "allCount" ? (
                  <input className='condInput' type="number" value={rollCount} onChange={(n) => { setRollCount(Number(n.target.value)), setPrevRolls(totRolls) }} />
                ) : (null)}
              </details>
            </div>
          </div>
        </details>

        <button className='fuse' onClick={fuse}>Fuse</button>
      </div>

      {rollMode === "count" || rollMode === "allCount" ? (
        <p>{totRolls - prevRolls}/{rollCount} rolls were performed</p>
      ) : (
        <p>{totRolls - prevRolls} rolls were performed</p>)}
      <div className='cards'>
        <CardSlot slots={slots} slot={slotIndex} setSlot={setSlotIndex}></CardSlot>
      </div>



      <Sidebar show={stats} setShow={setStats} />
      {stats && <Statbar />}

    </>
  )
}

export default App
