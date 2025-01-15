import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "../Slide/Slide";
import bgImg1 from "../../assets/images/bgImg-1.jpg";

const Carousel = () => {
  return (
    <section>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            title={"Empower Your Workforce"}
            desc={
              "Discover tools and resources designed to enhance productivity, streamline processes, and foster employee engagement. Image Type: A group of diverse employees collaborating in a modern office setting, showing teamwork and engagement."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg1}
            title={"Seamless Onboarding Experience"}
            desc={
              "Welcome new hires with our efficient onboarding process, ensuring a smooth transition from day one. Image Type: A new employee being welcomed by their team, receiving a welcome package, or participating in an orientation session."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg1}
            title={"Boost Professional Growth"}
            desc={
              "Unlock your potential with our comprehensive training and development programs tailored to your career aspirations. Image Type: Employees participating in a workshop or training session, with visuals of learning materials and engaged participants."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
