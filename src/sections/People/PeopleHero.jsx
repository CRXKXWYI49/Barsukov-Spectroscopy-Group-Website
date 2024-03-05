import { igorbarsukov } from "../../assets"
import { principalInvestigator } from "../../constants/people"


const PeopleHero = () => {
  return (
    <section className="pt-[100px] w-full">
        <div className="flex flex-row gap-10 bg-slate-100 border-2 shadow-2xl rounded-3xl p-5">
            
            <div className="w-1/2">
                <h1 className="font-bold text-3xl pb-2">
                    {principalInvestigator.name}
                </h1>
                <img src={igorbarsukov}
                    className="rounded-xl"
                    height={500}
                    width={500}/>
            </div>
            <div className="w-1/2">

            </div>

        </div>
  </section>
  )
}

export default PeopleHero