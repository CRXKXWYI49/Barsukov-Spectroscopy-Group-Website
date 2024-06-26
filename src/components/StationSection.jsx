import CarouselCard from "./CarouselCard"
import CarouselCardMirrored from "./CarouselCardMirrored"

import { stations } from "../constants/laboratories"


const StationSection = () => {
  return (
    <>
      <CarouselCard CarouselCardData={stations[0]} />
      <CarouselCard CarouselCardData={stations[1]} />
      <CarouselCard CarouselCardData={stations[2]} />
    </>
  )
}

export default StationSection