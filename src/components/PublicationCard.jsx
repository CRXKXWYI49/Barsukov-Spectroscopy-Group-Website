import CopyButton from "./CopyButton"


const PublicationCard = ({publication}) => {
  return (

    <div className="w-full px-5 py-2">
        <h3 className="font-medium text-lg lg:text-xl py-2">{publication.Title}</h3>
        <div className="flex flex-row flex-wrap text-sm lg:text-xl">
            {publication.People.join(", ")}
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-1 py-2 font-thin">
            <div>
              <span className="text-sm lg:text-md">{publication.Journal}, </span>
              <a className="text-blue-500 text-sm lg:text-md"
                  href={`https://www.${publication.DOI}`}
                  target="_blank">
                {publication.DOI}
              </a>
            </div>
            <div className="flex justify-self-end">
                {publication.BibTex != null &&
                  <CopyButton copyString={publication.BibTex}
                  buttonText={"BibTex"}/>  
                }
                {publication.Citation != null &&
                  <CopyButton copyString={publication.Citation}
                  buttonText={"Citation"}/>  
                }
            </div>
        </div>
    </div>
  )
}

export default PublicationCard