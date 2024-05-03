import { backgroundvideo } from "../assets"


const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1]">
      <video autoPlay loop muted className="object-cover w-full h-full">
        <source src={backgroundvideo} type="video/mp4" />  
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
    </div>
  )
}

export default BackgroundVideo