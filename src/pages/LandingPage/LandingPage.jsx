import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import OurMission from "./sections/OurMission";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Partners />
      <OurMission />
      <Reviews />
    </div>
  );
};

export default LandingPage;
