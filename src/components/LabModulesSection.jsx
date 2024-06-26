import CarouselCard from "./CarouselCard"
import CarouselCardMirrored from "./CarouselCardMirrored"

import { labModules } from "../constants/laboratories"


const LabModulesSection = () => {
  return (
    <>
      <CarouselCard CarouselCardData={labModules[0]} />
      <CarouselCard CarouselCardData={labModules[1]} />
      <CarouselCard CarouselCardData={labModules[2]} />
      <CarouselCard CarouselCardData={labModules[3]} />
    </>


  )
}

export default LabModulesSection