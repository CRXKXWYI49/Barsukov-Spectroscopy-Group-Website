import { ModularStationDiagram, 
         Hero, 
         MethodologiesCard,
         Spacer } from "../components"

import { useState, useEffect } from "react"

const Laboratories = () => {

  const [displayState, setDisplayState] = useState(1)
  const handleDisplayState = (state) => setDisplayState(state);

  const useEffect(() => {
    if()
      
  }, [displayState]);

  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>

      <Hero>
        <div className="flex flex-col items-center bg-white rounded-std">
          <h1 className="font-bold text-3xl py-5">
            Modular Experiment Stations
          </h1>
          <div className="grid grid-cols-2 ">
            <div className="h-[400px]">
              <ModularStationDiagram/>
            </div>
            <p className="flex items-center font-light">
              All experiment stations are built with modularity in mind
            </p>
          </div>
          <div className="flex flex-row w-full justify-around">
            <button 
              className="font-bold border p-4 rounded-std"
              onClick={handleDisplayState(1)}
            >
              Our Stations
            </button>
            <button 
              className="font-bold border p-4 rounded-std"
              onClick={handleDisplayState(2)}
            >
              Methodologies
            </button>
            <button 
              className="font-bold border p-4 rounded-std"
              onClick={handleDisplayState(3)}
            >
              Lab Modules
            </button>
          </div>
        </div>
      </Hero>
        
      <Spacer spacerClasses={"h-[100px]"}/>
    </>
  )
}





export default Laboratories