import { Hero, Spacer } from "../components"
import { newsList } from "../constants/home"

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

      <div className="rounded-std bg-white">
        <h3 className="font-bold text-2xl p-5">News Feed</h3>

        <div className="flex flex-col gap-4 p-5">
        {newsList.map((news)=>(

          <div className="flex flex-row gap-4 w-full items-center">

            <div className="flex flex-col px-2 font-bold">
              <div>{news.month}</div>
              <div>{news.year}</div>
            </div>

            <div className="">
              <p className="">
                {news.news}
              </p>
            </div>

          </div>  
        ))} 
        </div>


      </div>



      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

// Welcome to barsukov research group!
// Slogan
// News Fully extended

export default Home