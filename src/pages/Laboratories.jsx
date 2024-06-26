import { ModularStationDiagram, 
         Hero, 
         Spacer,
         StationSection,
         MethodologiesSection,
         LabModulesSection
        } from "../components"
import { experimentStationDescription } from "../constants/laboratories";
import { useState } from "react"


const Laboratories = () => {
  const [displayState, setDisplayState] = useState(1);

  const handleDisplayState = (state) => () => {
    setDisplayState(state);
  };

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
            <p className="flex items-center font-light p-5">
              {experimentStationDescription}
            </p>
          </div>

          <div className="flex flex-row w-full justify-around">
            <button 
              className="font-bold p-4 rounded-std"
              onClick={handleDisplayState(1)}
            >
              Our Stations
            </button>
            <button 
              className="font-bold p-4 rounded-std"
              onClick={handleDisplayState(2)}
            >
              Methodologies
            </button>
            <button 
              className="font-bold p-4 rounded-std"
              onClick={handleDisplayState(3)}
            >
              Lab Modules
            </button>
          </div>
        </div>
      </Hero>

      {displayState === 1 && <StationSection />}
      {displayState === 2 && <MethodologiesSection />}
      {displayState === 3 && <LabModulesSection />}
        
      <Spacer spacerClasses={"h-[100px]"}/>
    </>
  )
}





export default Laboratories