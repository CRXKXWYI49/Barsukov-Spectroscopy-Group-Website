import { Spacer, CarouselCard, CarouselCardMirrored } from "../components"
import { Outreach1, Outreach2, Outreach3 } from "../constants/outreach"

const Outreach = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
      <CarouselCard CarouselCardData={Outreach1}/>
      <CarouselCardMirrored CarouselCardData={Outreach2}/>
      <CarouselCard CarouselCardData={Outreach3}/>
      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}



export default Outreach