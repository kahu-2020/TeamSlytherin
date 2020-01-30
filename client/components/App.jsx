import React from 'react'
import Wizard from './Wizard'

const App = () => {
  return (
    <div>
      <h1>Slytherin Spell Selector</h1>
      <Wizard image="/image/malfoy.jpeg" name="Draco Malfoy" spell="Everte Statum" wand="Hawthorne wood and unicorn hair core" />
      <Wizard image="image/snape.jpeg" name="Severus Snape" spell="Sectumsempra" wand="Oak and DRagon heart string" />
      <Wizard image="/image/volde.jpeg" name="Lord Voldemort" spell="Avada Kedavra" wand="Yew and phoenix feather core" />
    </div>
  )
}

export default App
