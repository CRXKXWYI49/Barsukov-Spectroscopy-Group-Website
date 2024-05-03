import { shirashhead } from "../assets"

const ___ = () => {
    return (
      <div className="h-screen w-screen flex items-center justify-center static">
        <img src={ shirashhead } 
             className="absolute animate-spin h-1/2" 
             alt="spinning"/>
      </div>
    );
  }
  
  export default ___;