import { Carousel } from "."


const CarouselCardMirrored = ({CarouselCardData}) => {
  return (
    <section className="rounded-std bg-white w-full">
      <h2 className="font-bold p-5 text-3xl"> {CarouselCardData.title} </h2>
      <div className="flex justify-between">
        <div className="w-1/2 px-10 py-5">
          <Carousel images={CarouselCardData.images} 
                    numSlides={CarouselCardData.images.length}
                    className="border rounded-2xl"/>
        </div>
        <div className="w-1/2 font-bold px-10 py-5">
          {CarouselCardData.description}
        </div>
      </div>

    </section>
    
  )
}

export default CarouselCardMirrored