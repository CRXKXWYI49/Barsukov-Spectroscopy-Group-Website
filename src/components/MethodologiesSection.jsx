import CarouselCard from "./CarouselCard"
import CarouselCardMirrored from "./CarouselCardMirrored"

import { methodologies } from "../constants/laboratories"

const MethodologiesSection = () => {
  return (
    <>
      <CarouselCard CarouselCardData={methodologies[0]}/>
      <CarouselCard CarouselCardData={methodologies[1]}/>
      <CarouselCard CarouselCardData={methodologies[2]}/>
      <CarouselCard CarouselCardData={methodologies[3]}/>
    </>
  )
}

export default MethodologiesSection