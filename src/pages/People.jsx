import { PersonCard, Hero, PICard, SectionSplitter, Spacer } from "../components"
import { peopleArray, alumniArray} from "../constants/people"

const People = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
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

      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

export default People