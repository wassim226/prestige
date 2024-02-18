import React from 'react'
import { Pool3 } from '../assets'
import { default_description } from '../constantes'
import { Articale } from '../components'

function Pool() {
  const sections = [{
    image: Pool3,
    title : "Bienvenue dans le magazine de la piscine",
    description: default_description,
    services: ["Forme libre", "Couloir de nage", "Plage immergée", "Filtration écologique"]
  }]
  return (
    <div>
      <Articale 
        background_class={`background-landscape conception3`}
        title={"Bienvenue dans le magazine de la piscine"} 
        description={default_description}
        sections={sections}
      />
    </div>
  )
}

export default Pool