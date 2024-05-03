import { Spacer } from "../components"
import { disclaimer } from "../constants/disclaimer"

const Disclaimer = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>
        <div className="rounded-std bg-white p-5">
          {disclaimer}
        </div>
      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

export default Disclaimer