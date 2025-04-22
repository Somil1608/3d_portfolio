import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Resume from "./pages/Resume"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />

        {/* Resume Page Route */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
