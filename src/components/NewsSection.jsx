import { useState, useEffect } from "react";
import { newsList } from "../constants/home";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const NewsSection = () => {
  const [newsState, setNewsState] = useState(false);
  const [displayedList, setDisplayedList] = useState([]);

  useEffect(() => {
    if (newsState) {
      setDisplayedList(newsList);
    } else {
      setDisplayedList(newsList.slice(0, 10));
    }
  }, [newsState]);

  const handleNewsState = () => {
    setNewsState(!newsState);
  };


  return (
    <section className="rounded-std bg-white">
      <h3 className="font-bold text-2xl p-5">News Feed</h3>
      <div className="flex flex-col gap-4 p-5">

        {displayedList.map((news)=>(
        <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-row px-2 font-bold gap-1 w-1/12">
            <div>{news.month}</div>
            <div>{news.year}</div>
            </div>
              <div className="w-11/12">
              <p dangerouslySetInnerHTML={{ __html: news.news }}/>
            </div>
          </div>  
        ))} 

      </div>
      <div className="flex justify-center">
        <button 
          onClick={handleNewsState}
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            {newsState == false ? "Show More": "Show Less" }
          </p> 
          {newsState == false? <FaAngleDown className="text-2xl"/>: <FaAngleUp className="text-2xl"/>}
        </button>
      </div>
    </section>
  )
}

export default NewsSection