import { missionImage } from "../../../assets";

const OurMission = () => {
  return (
    <section id="mission" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={missionImage}
                className="w-full h-auto"
                alt="About Us Image"
              />
            </div>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              We are Innovate, a forward-thinking organization dedicated to
              transforming STEM education for girls. Our mission is to make STEM
              accessible, engaging, and personalized, using the power of
              advanced artificial intelligence to inspire the next generation of
              female scientists, engineers, and innovators. Through our
              platform, we empower young girls to develop a strong foundation in
              science, technology, engineering, and math by providing them with
              customized learning paths that align with their unique interests
              and pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
