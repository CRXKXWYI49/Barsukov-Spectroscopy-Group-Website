import { Hero, Spacer, NewsSection } from "../components"

const Home = () => {

  return (
    <>
        <Spacer spacerClasses={"h-[60px]"}/>
        <Hero>
            <div className="flex items-center h-70vh rounded-std bg-black/25">
            <div className="">
                <h1 className="font-bold text-white text-center text-6xl">
                Welcome to the Barsukov Spectroscopy Group!
                </h1>
            </div>
            </div>
        </Hero>

    

        <NewsSection/>

        <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

// Welcome to barsukov research group!
// Slogan
// News Fully extended

export default Home