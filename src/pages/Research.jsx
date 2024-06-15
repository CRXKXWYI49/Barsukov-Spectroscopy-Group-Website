import React from 'react'
import { CarouselCard, CarouselCardMirrored, Spacer } from '../components'
import {researchMission, researchArea, researchArea2, researchArea3} from '../constants/research'

const Research = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
      <CarouselCard CarouselCardData={researchMission}/>
      <CarouselCardMirrored CarouselCardData={researchArea}/>
      <CarouselCard CarouselCardData={researchArea2}/>
      <CarouselCardMirrored CarouselCardData={researchArea3}/>
      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

// One Tile Research Mission
// Four Extra tiles of examples for each area of physics being explored
// Each example has slides

export default Research