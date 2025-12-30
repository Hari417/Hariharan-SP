import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import Tech from "./components/sections/Tech";
import Works from "./components/sections/Works";
import Feedbacks from "./components/sections/Feedbacks";
import Contact from "./components/sections/Contact";
import { StarsCanvas } from "./components/canvas";

import { useLayout } from "./context/LayoutContext";

const App = () => {
  const { isProfessional } = useLayout();

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${isProfessional ? 'bg-slate-50' : 'bg-primary'}`}>
        <div className={`bg-cover bg-no-repeat bg-center ${isProfessional ? 'bg-professional-hero' : 'bg-hero-pattern'}`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Services />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
        {!isProfessional && <StarsCanvas />}
      </div>
    </BrowserRouter>
  );
}

export default App;
