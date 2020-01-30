import React from 'react'
import Wizard from './Wizard'

const App = () => {
  return (
    <div>

      <h1>Slytherin Spell Selector</h1>

      <div className="wizard-wrapper">
        <Wizard image="/image/draco.png" name="Draco Malfoy" spell="Everte Statum" wand="Hawthorne wood and unicorn hair core" />
        <Wizard image="/image/snape.png" name="Severus Snape" spell="Sectumsempra" wand="Oak and DRagon heart string" />
        <Wizard image="/image/voldemort.png" name="Lord Voldemort" spell="Avada Kedavra" wand="Yew and phoenix feather core" />
      </div>

    </div>
  )
}

export default App
