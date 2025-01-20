import AboutUs from "../../components/AboutUs/AboutUs";
import Carousel from "../../components/Carousel/Carousel";
import FAQ from "../../components/FAQ/FAQ";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Temonials";

const Home = () => {
  return (
    <>
      <Carousel />
      <AboutUs />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
