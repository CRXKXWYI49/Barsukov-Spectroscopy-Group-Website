import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
 

const HoverButton = ({ children, link }) => {

    const buttonContent = children[0];
    const hoverContent = children[1];
    const [isShown, setIsShown] = useState(false);

    const hover = {
        hidden: { 
            opacity: 0, y: -55, transition: { duration: 0.01 }, 
        },
        show: { 
            opacity: 1, y:-55, transition: { duration: 0.01 },
        }
    }

    
    return (
      <div className="relative inline-flex flex-col items-center">

        <motion.div className="absolute"
                    initial="hidden"
                    variants={ hover }
                    animate={isShown ? "show" : "hidden"}>
            {hoverContent}      
        </motion.div>
        
        <button className="z-10"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
          {buttonContent}
        </button>

      </div>
    )
}

export default HoverButton