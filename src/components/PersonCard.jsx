import { FaLinkedin, FaOrcid } from "react-icons/fa";

import { HoverButton } from "../components";

const PersonCard = ({ person }) => {
  return (
    <div className="flex items-center rounded-std bg-white">

      <div className="flex flex-col lg:flex-row items-center w-full">

          <div className="p-3 w-1/2 lg:w-1/3">
            <img src={person.image}
                 className="rounded-full w-full"/>
          </div>

          <div className="flex flex-col py-3 w-[80%] lg:w-2/3">

            <h1 className="font-bold text-3xl">{person.name}</h1>
            <p className="text-black font-bold">{person.position}</p>
            <p className="text-black font-light">{person.description}</p>
            
            <div className="flex text-2xl gap-1 py-2">
              {
                (person.linkedIn != null) && 
                <HoverButton link={person.link}> 
                  <div className="text-2xl">
                    <FaLinkedin className="hover:scale-125"/>
                  </div>  
                  <div className="bg-white font-bold text-xl z-10 shadow-xl border-2 border-black rounded-xl p-1">
                    LinkedIn
                  </div>  
                </HoverButton>
              }
              {
                (person.orcid != null) && 
                <HoverButton> 
                  <div className="text-2xl">
                    <FaOrcid className="hover:scale-125"/>
                  </div>
                  <div className="bg-white font-bold text-xl z-10 shadow-xl border-2 border-black rounded-xl p-1">
                    Orcid
                  </div>  
                </HoverButton>
              }
            </div>

          </div>



      </div>
    
    </div>
  )
}

export default PersonCard