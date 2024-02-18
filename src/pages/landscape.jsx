import React from 'react';
import {Articale} from '../components';
import { useParams } from "react-router-dom";
import { default_description, landscape } from '../constantes';
import { Background } from '../assets';

function Landscape(props) {
  const {ind} = useParams();
  const sections = [{
    image: Background,
    title : landscape[ind].toUpperCase(),
    description: default_description,
    services: ["Forme libre", "Couloir de nage", "Plage immergée", "Filtration écologique"]
  }]
  return (
    <div>
      <Articale 
        background_class={`background-landscape conception${ind}`}
        title={landscape[ind].toUpperCase()} 
        description={default_description}
        sections={sections}
      />
    </div>
  )
}

export default Landscape