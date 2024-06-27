import { Carousel } from "."


const CarouselCardMirrored = ({CarouselCardData}) => {
  return (
    <section className="rounded-std bg-white w-full">
      <h2 className="font-bold p-5 text-2xl lg:text-3xl"> {CarouselCardData.title} </h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 p-5">
          <Carousel images={CarouselCardData.images} 
                    numSlides={CarouselCardData.images.length}
          />
        </div>
        <div className="lg:w-1/2 font-bold p-5">
          {CarouselCardData.description}
        </div>
      </div>

    </section>
    
  )
}

export default CarouselCardMirrored