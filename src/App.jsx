import {
  Home,
  People,
  Publications,
  Research,
  Outreach,
  Laboratories,
  JoinUs,
  Contact,
  Disclaimer,
  ___
} from "./pages";
import { Navbar, BackgroundVideo, Footer } from "./components";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <BackgroundVideo />
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-10 w-[90%] lg:w-[1024px]">
            <Navbar className="w-[90%] lg:w-[1024px]" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/research" element={<Research />} />
              <Route path="/outreach" element={<Outreach />} />
              <Route path="/laboratories" element={<Laboratories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/joinus" element={<JoinUs />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/shirash" element={<___ />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
