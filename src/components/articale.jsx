import React from 'react';
import {ArticaleHead, Presentation} from '../components';

function Articale(props) {
  const {background_class, title, description, sections}  = props;
  return (
    <div className={`flex flex-col justify-start w-[100vw]`}>
        <ArticaleHead 
            background_class={background_class} 
            title={title} 
            description={description}
        />
        {
            sections.map((section, index)=><Presentation 
                key={"sec_" + index}
                image={section.image} 
                title={section.title} 
                services={section.services}
                description={section.description}
           />)
        }
    </div>
  )
}

export default Articale