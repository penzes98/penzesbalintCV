import Footer from "./Components/Footer";
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Schools from "./Pages/Schools";
import Experiences from "./Pages/Experiences";
import AboutMe from "./Pages/AboutMe";
import ResponsiveSidebar from "./Components/ResponsiveSidebar";

function App() {

  const location = useLocation();

  return (
    <>
      <ResponsiveSidebar pageComponent={location} />

      <Routes location={location}>
        <Route path='/home' element={<Home />} />
        <Route path='/schools' element={<Schools />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      
      <Footer />
    </>
  );

}

export default App;
