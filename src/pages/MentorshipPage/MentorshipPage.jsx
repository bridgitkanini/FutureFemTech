import empoweringImg from "../../assets/empowering.jpeg";
import hackathonImg from "../../assets/hackathon.jpeg";
import javaImg from "../../assets/java.jpeg";

const MentorshipPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 my-40 px-6">
      <h1 className="text-4xl font-bold text-center my-8">
        Upcoming Mentorship Events
      </h1>

      {/* First Event */}
      <div className="flex border rounded-lg shadow-lg w-full max-w-4xl overflow-hidden h-full">
        <img
          src={empoweringImg}
          alt="Empowering Women in Cybersecurity"
          className="w-1/2 object-cover"
        />
        <div className="w-1/2 p-6 flex flex-col justify-between h-full">
          <h3 className="text-2xl font-semibold mb-2">
            🌐 Empowering Women in Cybersecurity 🌐
          </h3>
          <p className="text-sm mb-4">
            🗓 Date: November 16, 2024 <br />
            📍 Venue: ALX Hub - The Piano <br />
            💸 Cost: Free, in-person
          </p>
          <p className="text-sm mb-4">
            Join us for a dynamic event featuring Africa&apos;s top female
            cybersecurity experts, including innovators like Lindiwe Matlali and
            Anna Collard. Dive into live panels, practical cyber tips, and
            networking with inspiring women shaping the future of digital
            defense in Africa!
          </p>
          <a href="#" className="text-blue-400 underline mt-2">
            See More
          </a>
        </div>
      </div>

      {/* Second Event */}
      <div className="flex border rounded-lg shadow-lg w-full max-w-4xl overflow-hidden flex-row-reverse h-full">
        <img
          src={hackathonImg}
          alt="Web3 Hackathon @ UoN"
          className="w-1/2 object-cover"
        />
        <div className="w-1/2 p-6 flex flex-col justify-between h-full">
          <h3 className="text-2xl font-semibold mb-2">
            🚀 Web3 Hackathon @ UoN: Unleashing the Power of ICP! 🚀
          </h3>
          <p className="text-sm mb-4">
            🗓 Date: November 23, 2024 <br />
            📍 Venue: University of Nairobi <br />
            💸 Cost: Free
          </p>
          <p className="text-sm mb-4">
            Calling all developers, innovators, and tech enthusiasts! Join us
            for an electrifying Web3 Hackathon at the University of Nairobi,
            where the future of the internet meets pure innovation! Powered by
            Internet Computer Protocol (ICP), this hackathon is the perfect
            chance to dive into Web3, explore decentralized applications, and
            build the next generation of blockchain solutions.
          </p>
          <a href="#" className="text-blue-400 underline mt-2">
            See More
          </a>
        </div>
      </div>

      {/* Third Event */}
      <div className="flex border rounded-lg shadow-lg w-full max-w-4xl overflow-hidden h-full">
        <img
          src={javaImg}
          alt="Java Power Hour: Online Workshop"
          className="w-1/2 object-cover"
        />
        <div className="w-1/2 p-6 flex flex-col justify-between h-full">
          <h3 className="text-2xl font-semibold mb-2">
            🚀 Java Power Hour: Online Workshop with Africa’s Top Tech Talent!
            🚀
          </h3>
          <p className="text-sm mb-4">
            📅 Date & Time: November 22, 2024 | 8 PM - 10 PM EAT <br />
            🌍 Where: Online (Zoom)
          </p>
          <p className="text-sm mb-4">
            Unlock the secrets of Java with Africa’s elite Java experts in this
            power-packed virtual workshop! From foundational concepts to
            advanced frameworks like Spring Boot, this session dives into the
            heart of Java, showcasing real-world solutions that power industries
            globally.
          </p>
          <a href="#" className="text-blue-400 underline mt-2">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
