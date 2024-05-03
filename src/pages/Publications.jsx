import { publicationsArray } from "../constants/publications"
import { PublicationCard, Spacer } from "../components"

const Publications = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
      <section className="bg-white rounded-std w-full">
        <div className="grid grid-cols-1 divide-y-2">
          {publicationsArray.map((publication, index)=>(
            <PublicationCard publication={publication}
            key={index}/>
          ))}
        </div>
      </section>
      <Spacer spacerClasses={"h-60vh"}/>
    
    </>
  )
}

export default Publications