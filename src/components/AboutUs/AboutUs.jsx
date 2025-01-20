import SectionTitle from "../SectionTitle/SectionTitle";
import about from "../../assets/images/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="wrapper my-12">
      <SectionTitle
        title={"About Us"}
        description={
          "Dedicated to innovation and excellence since 2025. Our expert team delivers top-tier solutions to exceed client expectations."
        }
      />

      <div className="flex justify-center gap-8 mt-12">
        <div>
          <img
            className="max-w-lg rounded-lg"
            src={about}
            alt="workforce-wiz-team"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div className="bg-white p-6 rounded-lg max-w-2xl flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-cocoBlack">Our Story</h3>
            <p className="text-iron">
              At Workforce Wiz, we believe in creating a world where innovative
              solutions meet unparalleled customer satisfaction. Our journey
              began in 2025, and ever since, we’ve been at the forefront of
              industry advancements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg max-w-2xl flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-cocoBlack">
              Our Mission
            </h3>
            <p className="text-iron">
              To inspire, innovate, and deliver top-tier solutions that exceed
              our clients' expectations. We are committed to fostering a
              collaborative environment where ideas flourish and results speak
              volumes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg max-w-2xl flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-cocoBlack">Our Vision</h3>
            <p className="text-iron">
              To be a global leader, known for our integrity, creativity, and
              relentless pursuit of excellence. We aim to drive transformative
              changes that impact industries and enrich lives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg max-w-2xl flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-cocoBlack">Our Team</h3>
            <p className="text-iron">
              Comprised of industry experts, passionate innovators, and
              dedicated professionals, our team is our greatest asset. Together,
              we bring a diverse range of skills and a wealth of experience to
              every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
