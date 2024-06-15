import { PersonCard, Hero, PICard, SectionSplitter, Spacer, Carousel } from "../components"
import { heroCarouselImages, peopleArray, alumniArray} from "../constants/people"
import { minion1, minion2, minion3 } from "../assets"

const People = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
      
      <Hero>
        <div className="bg-white flex items-center justify-center rounded-std p-5">
            <Carousel 
              images={heroCarouselImages}
              numSlides={heroCarouselImages.length}
              className="rounded-2xl w-full p-5"
            />
        </div>
      </Hero>

      <Hero>
        <PICard/>
      </Hero>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {peopleArray.map((person, index)=>(
          <PersonCard person={person}
                      key={index}/>
        ))}
      </div>

      <SectionSplitter>
        Alumni
      </SectionSplitter>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {alumniArray.map((person, index)=>(
          <PersonCard person={person}
                      key={index}/>
        ))}
      </div>

      <SectionSplitter>
        Alumni2
      </SectionSplitter>

      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

export default People