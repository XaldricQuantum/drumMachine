import { useState, useEffect } from 'react'
import './App.css'
import PadContainer from './PadContainer.jsx'
import DisplayContainer from './DisplayContainer.jsx'



function App() {
  const [displayText, setDisplayText] = useState("TEST")
  const [powerSwitch, setPowerSwitch] = useState(true)
  const [bankSwitch, setBankSwitch] = useState(false)

  const updateDisplayText = (text) => {
    setDisplayText(text)
    console.log(`Powe State ${powerSwitch}`)
  }
  const updatePowerSwitch = () => setPowerSwitch(prev => !prev);
  const updateBankSwitch = () => setBankSwitch(prev => !prev);

  return (
    <div className="container" id='drum-machine'>
      <PadContainer updateDisplayText={updateDisplayText} 
          powerSwitch={powerSwitch} 
          bankSwitch={bankSwitch}
          />
      <DisplayContainer displayText={displayText} 
          updatePowerSwitch={updatePowerSwitch} 
          updateDisplayText={updateDisplayText}
          updateBankSwitch={updateBankSwitch} />

    </div>
    
  )
}

export default App
