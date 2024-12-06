import { createContext } from 'react';

import ComponentAB from './ComponentAB';

export const Data=createContext()

export const Data1=createContext()

export const ComponentA = () => {
    const person={
      name1:"John",
      name2:"Sauvik",
      name3:"Karan"
    }
    const age=25;
  return (
    <div>
      <Data.Provider value={person}>
      <Data1.Provider value={age}>
    
      
      <ComponentAB />

      </Data1.Provider>
      </Data.Provider>
       
        
      </div>
  )
}

