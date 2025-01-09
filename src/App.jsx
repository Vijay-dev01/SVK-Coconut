import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Location } from "./components/location";
import Canvas from "./canvas/Canvas";
import LazyShow from "./LazyShow";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navigation />
            <Header data={landingPageData.Header} />
          </div>
        </div>
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Features data={landingPageData.Features} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About data={landingPageData.About} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Services data={landingPageData.Services} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Gallery data={landingPageData.Gallery} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Testimonials data={landingPageData.Testimonials} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Team data={landingPageData.Team} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Location data={landingPageData.Location} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Contact data={landingPageData.Contact} />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
