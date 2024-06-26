import { Home,
         People,
         Publications,
         Research,
         Outreach,
         Laboratories,
         JoinUs,
         Contact,
         Disclaimer,
         ___ } from "./pages";
import { Navbar,
         BackgroundVideo,
         Footer } from "./components"
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <section>
            <BackgroundVideo/>
              <div className="w-full flex justify-center">
                <div className="flex flex-col items-center gap-10 w-[80%] lg:w-[1024px]">
                  <Navbar className="w-[80%] lg:w-[1024px]"/>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/people" element={<People/>}/>
                      <Route path="/publications" element={<Publications/>}/>
                      <Route path="/research" element={<Research/>}/>
                      <Route path="/outreach" element={<Outreach/>}/>
                      <Route path="/laboratories" element={<Laboratories/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="/joinus" element={<JoinUs/>}/>
                      <Route path="/Disclaimer" element={<Disclaimer/>}/>
                      <Route path="/shirash" element={<___/>}/>
                </div>
              </div>
            <Footer/>
          </section>
        </Routes>   
      </BrowserRouter>         
    </>
  )
}

export default App
