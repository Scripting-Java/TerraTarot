import { useState } from 'react'
import Card from './components/card/card'
import { cards } from './data/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card card={cards[0]}></Card>
  )
}

export default App
