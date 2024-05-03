import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";


const CopyButton = ({copyString, buttonText}) => {

    const[copyState, setCopyState] = useState(false)
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyString);
            setCopyState(true);
            setTimeout(() => setCopyState(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };


    return (

        <button onClick={handleCopy}
                className="flex w-[90px]">  
            {!copyState 
                ? <div className="flex flex-row items-center justify-between">
                    <div className="pr-2"><MdContentCopy/></div>
                    <p>{buttonText}</p>
                  </div>
                : <div className="flex flex-row items-center justify-between">
                    <div className="pr-2"><FaCheck/></div>  
                    <p>Copied!</p>
                  </div>
            }
        </button>
    
    )
}

export default CopyButton