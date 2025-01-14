import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "../ServiceCard/ServiceCard";
import onboarding from "../../assets/icons/onboarding.png";
import attendance from "../../assets/icons/attendance.png";
import benefits from "../../assets/icons/benefits.png";
import performance from "../../assets/icons/performance.png";
import selfService from "../../assets/icons/self-service.png";
import training from "../../assets/icons/training.png";

const Services = () => {
  return (
    <section className="wrapper my-20">
      <SectionTitle
        title={"Employee Wellness Programs"}
        description={
          "Our holistic Employee Wellness Programs support physical, mental, and emotional well-being through fitness challenges, mindfulness workshops, and more. Join us to foster a balanced and supportive work environment."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 justify-items-center gap-12">
        <ServiceCard
          icon={onboarding}
          title={"Onboarding"}
          description={
            "Welcome new employees with a seamless onboarding process, from initial paperwork to orientation."
          }
        />

        <ServiceCard
          icon={performance}
          title={"Performance"}
          description={
            "Manage performance with regular reviews, goal setting, and constructive feedback to foster growth."
          }
        />

        <ServiceCard
          icon={training}
          title={"Training"}
          description={
            "Access a variety of training programs and workshops to enhance skills and support career development."
          }
        />

        <ServiceCard
          icon={selfService}
          title={"Self-Service"}
          description={
            "Empower employees to manage their information, request time off, and access resources through a user-friendly portal."
          }
        />

        <ServiceCard
          icon={benefits}
          title={"Benefits"}
          description={
            "Easily manage health insurance, retirement plans, and wellness programs with comprehensive benefits administration."
          }
        />

        <ServiceCard
          icon={attendance}
          title={"Attendance"}
          description={
            "Track attendance, manage schedules, and monitor work hours to ensure accurate payroll and compliance."
          }
        />
      </div>
    </section>
  );
};

export default Services;
