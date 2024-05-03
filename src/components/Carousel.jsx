import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, 
         Slider, 
         Slide, 
         ButtonBack, 
         ButtonNext, 
         Image} from 'pure-react-carousel';

import { IoIosArrowForward, 
         IoIosArrowBack } from "react-icons/io";

const Carousel = ({images, numSlides=1, width=500, height=400, className = ""}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={numSlides}
      visibleSlides={1}
      infinite="True"
      className={className}
    >
      <div className='relative'>
        <Slider className='rounded-2xl'>
          {images.map((image, index) => (
          <Slide key={index}
                 index={index}>
              <Image src={image}/>  
          </Slide> 
          ))}
        </Slider>
        
        {numSlides > 1 && (
          <>
            <ButtonBack className='absolute top-1/2 -left-5 lg:-left-7 transform -translate-y-1/2'>
              <IoIosArrowBack className='text-xl'/>
            </ButtonBack>
            <ButtonNext className='absolute top-1/2 -right-5 lg:-right-7 transform -translate-y-1/2'>
              <IoIosArrowForward className='text-xl'/>
            </ButtonNext> 
          </>
        )}

      </div>
    </CarouselProvider>
  )
}

export default Carousel