
import { Spacer, CarouselCard, CarouselCardMirrored, Carousel } from "../components"
import { prospectiveGraduateStudents, 
         prospectiveUndergraduateStudents,
         prospectivePostdocs } from "../constants/joinus"

const JoinUS = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
      <CarouselCard CarouselCardData={prospectiveGraduateStudents}/>
      <CarouselCard CarouselCardData={prospectiveUndergraduateStudents}/>
      <CarouselCard CarouselCardData={prospectivePostdocs}/>
      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

export default JoinUS