import { principalInvestigator } from "../constants/people"
import { rateMyProfessor } from "../assets";
import { FaLinkedin, FaOrcid } from "react-icons/fa";


const PICard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 bg-white rounded-std p-5">

        <div className="lg:w-1/2">
            <img src={principalInvestigator.image}
                    className="rounded-xl"/>
        </div>

        <div className="flex flex-col gap-2 lg:w-1/2">
            <h1 className="text-3xl font-bold">{principalInvestigator.name}</h1>
            <ul className="list-[square] ml-4">
                {principalInvestigator.titles.map((title, index) => (
                <li key={index}> {title} </li>
                ))}
            </ul>
            <div className="flex  rounded-xl p-2 h-full">
                <div className="w-1/2">
                    <h2> <span className="font-bold">Office:</span> {principalInvestigator.office}</h2>
                    <h2> <span className="font-bold">Phone:</span> {principalInvestigator.phone}</h2>
                    <h2> <span className="font-bold">Email:</span> {principalInvestigator.email}</h2>
                    <h2> <span className="font-bold">Zoom:</span> on request</h2>

                </div>
                <div className="w-1/2">
                    <a className="flex items-center font-medium"
                       href={principalInvestigator.linkedIn}
                       target="_blank">
                        <FaLinkedin className="mr-1"/>
                        <h2>LinkedIn</h2>
                    </a>
                    <a className="flex items-center font-medium"
                       href={principalInvestigator.orcid}
                       target="_blank">
                        <FaOrcid className="mr-1"/>
                        <h2>Researcher ID</h2>
                    </a>
                    <a className="flex items-center font-medium"
                       href={principalInvestigator.orcid}
                       target="_blank">
                        <FaOrcid className="mr-1"/>
                        <h2>Rate My Professor</h2>
                    </a>
                    <a className="flex items-center font-medium"
                       href={principalInvestigator.orcid}
                       target="_blank">
                        <FaOrcid className="mr-1"/> 
                        <h2>UCR Profiles</h2>
                    </a>
                </div>
              </div>
              <div className="flex flex-col rounded-xl  p-2 h-full">
                <h3 className="font-bold">Bio</h3>
                <p>
                  {principalInvestigator.bio}
                </p>
             </div>
        </div>
    </div>
  )
}

export default PICard