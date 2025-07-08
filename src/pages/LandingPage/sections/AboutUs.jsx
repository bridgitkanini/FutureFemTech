import { aboutImage } from "../../../assets";

const AboutUs = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* About Us Text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold">About Us</h2>
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
          {/* About Us Image */}
          <div className="lg:w-1/2">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img src={aboutImage} className="w-full h-auto" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
