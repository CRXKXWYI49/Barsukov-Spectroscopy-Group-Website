import { labModules } from "../constants/ourLab"


const ModulesDiagram = () => {
  return (
    <>
      <div className="flex flex-col mx-auto w-10/12">

        {labModules.map((labModule, index)=>(
          <div key={index}>
            <h3 className="font-bold text-lg">{labModule.title}</h3>
            <p className="font-thin">{labModule.description}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default ModulesDiagram