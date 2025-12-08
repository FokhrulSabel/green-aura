import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const CoverflowSwiper = () => {
  // Auto load both WEBP and JPG images
  const images = import.meta.glob("../assets/coverflow/*.{webp,jpg}", {
    eager: true,
  });

  const galleryImages = Object.keys(images).map((key) => images[key].default);

  return (
    <section className="bg-indigo-50 py-20 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold md:text-5xl mb-5">
          Elevate Your Space with{" "}
          <span className="text-primary">GREENAURA</span>
        </h2>
        <p className="text-gray-700 mb-15 max-w-2xl mx-auto">
          It's Easy Being Green, With Us!
        </p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
        //   loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 180,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper-coverflow-demo"
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-sm shadow-lg p-4 flex flex-col items-center justify-center max-w-sm mx-auto"
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-sm h-sm object-cover rounded-sm"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoverflowSwiper;
