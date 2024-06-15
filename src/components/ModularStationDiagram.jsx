import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import { labModules } from "../constants/laboratories";


const ModularStationDiagram = () => {

  const [module1, setModule1] = useState(false);
  const [module2, setModule2] = useState(false);
  const [module3, setModule3] = useState(false);
  const [module4, setModule4] = useState(false);


  const attachedLower = {
    attached: { 
        opacity: 1, 
        y: 0, 
        transition:{ 
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 50

        }, 
    },
    detached: { 
        opacity: 1, 
        y:50, 
        transition: { 
            duration: 0,
            type: "spring",
            stiffness: 160,
            damping: 10
        },
    }
  };

  const attachedUpper = {
    attached: { 
        opacity: 1, 
        y: 0, 
        transition:{ 
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 50

        }, 
    },
    detached: { 
        opacity: 1, 
        y:-50, 
        transition: { 
            duration: 0,
            type: "spring",
            stiffness: 160,
            damping: 10
        },
    }
  };

  useEffect(() => {
    const updateModuleStates = () => {
        let random = Math.random();

        if      (random <= 0.25) setModule1(!module1);
        else if (random <= 0.50) setModule2(!module2);
        else if (random <= 0.75) setModule3(!module3);
        else                     setModule4(!module4);
    };
    
    const intervalId = setInterval(updateModuleStates, 1500);
    return () => clearInterval(intervalId);

  }, [module1, module2, module3, module4]);


  return (
    <>
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex justify-around gap-4 w-10/12">
                <motion.div className="grid place-items-center border-2 border-black rounded-xl h-[50px] w-full"
                            animate={module3 ? "attached" : "detached"}
                            variants={attachedUpper}
                            initial="detached"
                            >
                    <h2 className="font-bold font-xl">{labModules[2].title}</h2>
                </motion.div>
                <motion.div className="grid place-items-center border-2 border-black rounded-xl h-[50px] w-full"
                            animate={module4 ? "attached" : "detached"}
                            variants={attachedUpper}
                            initial="detached"
                            >
                    <h2 className="font-bold font-xl">{labModules[3].title}</h2>
                </motion.div>
            </div>

            <div className="grid place-items-center w-10/12 h-[100px] border-2 border-black rounded-xl">
                <h2 className="font-bold font-xl">Station</h2>
            </div>

            <div className="flex justify-around gap-4 w-10/12">
                <motion.div className="grid place-items-center border-2 border-black rounded-xl h-[50px] w-full"
                            animate={module1 ? "attached" : "detached"}
                            variants={attachedLower}
                            initial="detached"
                >
                    <h2 className="font-bold font-xl">{labModules[0].title}</h2>
                </motion.div>
                <motion.div className="grid place-items-center border-2 border-black rounded-xl h-[50px] w-full"
                            animate={module2 ? "attached" : "detached"}
                            variants={attachedLower}
                            initial="detached"
                >
                    <h2 className="font-bold font-xl">{labModules[1].title}</h2>
                </motion.div>
            
            </div>

        </div>         
    </>
  )
}

export default ModularStationDiagram