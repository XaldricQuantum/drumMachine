import { useState } from 'react'
import './App.css'
import PadContainer from './padContainer'
import DisplayContainer from './DisplayContainer'



function App() {
  const [displayText, setDisplayText] = useState("TEST")
  const [powerSwitch, setPowerSwitch] = useState(true)
  const [bankSwitch, setBankSwitch] = useState(true)

  const updateDisplayText = (text) => {
    setDisplayText(text)
  }

  return (
    <div className="container">
      <PadContainer updateDisplayText={updateDisplayText} />
      <DisplayContainer displayText={displayText} />

    </div>
    
  )
}

export default App
