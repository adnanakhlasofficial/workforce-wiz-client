import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios("/testimonials.json");
      setTestimonial(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper space-y-12 my-12">
      <SectionTitle
        title={"Inspiring Success Stories"}
        description={
          " Hear from individuals who achieved their career goals with FutureFocus. Be inspired by their journeys and start yours today!"
        }
      />

      <div className="mx-auto max-w-2xl shadow-lg">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {testimonial.map((singleTestimonial) => (
            <SwiperSlide key={singleTestimonial.id}>
              <TestimonialCard
                singleTestimonial={singleTestimonial}
              ></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
