import { ModularStationDiagram, 
         ModulesDiagram,
         Hero, 
         MethodologiesCard,
         CarouselCard,
         Spacer } from "../components"
import { methodologies,
         stationCards,
         labModules} from "../constants/ourLab"

const OurLab = () => {
  return (
    <>
        <Spacer spacerClasses={"h-[60px]"}/>
        <Hero>
          <div className="flex flex-col bg-white rounded-std">
          
            <h2 className="font-bold text-3xl p-5 mx-auto"> Our Lab </h2>
              <div className="grid grid-cols-2 pt-10">
                <h3 className="mx-auto font-bold text-2xl">Modular Experiment Stations</h3>
                <h3 className="mx-auto font-bold text-2xl">Methodologies</h3>
              </div>
              <div className="grid grid-rows-2 grid-cols-4 w-full">

                <div className="col-span-2 h-[350px]">
                  <ModularStationDiagram/>
                </div>

                <div>
                  <MethodologiesCard methodologiesCardData={methodologies[0]}/>
                </div>

                <div> 
                  <MethodologiesCard methodologiesCardData={methodologies[1]}/>
                </div>
                
                <div className="col-span-2">
                  <ModulesDiagram/>
                </div>

                <div>
                  <MethodologiesCard methodologiesCardData={methodologies[2]}/>
                </div>

                <div>
                  <MethodologiesCard methodologiesCardData={methodologies[3]}/>
                </div>

              </div>

            </div>
        </Hero>

        {stationCards.map((stationCard, index)=>(
          <CarouselCard CarouselCardData={stationCard}
                       key={index}/>
        ))}
      <Spacer spacerClasses={"h-[100px]"}/>
    </>
  )
}





export default OurLab