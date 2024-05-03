const PhotoCard = ({PhotoCardData}) => {
  return (
    <section className="rounded-std bg-white">
      <h2 className="font-bold p-5 text-3xl"> {PhotoCardData.title} </h2>
      <div className="flex justify-between">

        <div className="w-1/2 px-10 py-5 h-full">
          <img src={PhotoCardData.image}
               className="rounded-xl"/>
        </div>

        <div className="w-1/2 font-bold px-10 py-5">
          {PhotoCardData.description}
        </div>
        
      </div>

    </section>
    
  )
}

export default PhotoCard