import { Home,
         People,
         XXX } from "./pages";
import { Navbar } from "./components"
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <section className="">
        <Navbar/>
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-10 w-[80%] lg:w-[1024px]">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/people" element={<People/>}/>
                <Route path="/shirash" element={<XXX/>}/>
              </Routes>   
            </BrowserRouter>         
          </div>
        </div>
      </section>
    </>
  )
}

export default App
