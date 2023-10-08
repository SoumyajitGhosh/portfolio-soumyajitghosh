import { BrowserRouter } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const starsCanvasRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as needed
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Perform actions when the element becomes visible
          if (entry.target === starsCanvasRef.current) {
            // Experience component is in the viewport
            setVisible(true);
          } else {
            setVisible(false);
          }
          // Add similar checks for other components as needed
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Start observing the elements
    if (starsCanvasRef.current) observer.observe(starsCanvasRef.current);
    // Add similar lines for other components

    // Clean up the observer when the component unmounts
    return () => {
      if (observer) observer.disconnect();
    };
  });
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {visible && <StarsCanvas ref={starsCanvasRef} />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
