// Modules
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";

// Components
import MainSliderSlide from "./MainSliderSlide";

// Types
import { SlideProps } from "../../types/mainSliderSlide";

// Helpers
import { getMainSliderData } from "../../helpers/apiRequests";
import { highlightColor } from "../../helpers/otherVariables";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

const MainSlider = () => {
  // State

  const [slideData, setSlideData] = useState<SlideProps[]>();

  // Effect
  useEffect(() => {
    getMainSliderData(setSlideData);
  }, []);

  const breakpoints: Record<number, boolean> = {
    1100: useMediaQuery("(max-width: 1100px)"),
    900: useMediaQuery("(max-width: 900px)"),
    700: useMediaQuery("(max-width: 700px)"),
    500: useMediaQuery("(max-width: 500px)"),
  };

  return (
    <section className="main-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        // autoHeight={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        pagination={{
          el: ".swiper-custom-pagination",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        loop={true}
        className="swiper-custom"
      >
        <div className="swiper-custom-pagination" />

        {slideData ? (
          slideData.map((slide: SlideProps) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <MainSliderSlide
                  id={slide.id}
                  img={slide.img}
                  txt={slide.txt}
                  header={slide.header}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <Skeleton
            height={
              breakpoints["500"]
                ? "25rem"
                : breakpoints["700"]
                ? "40rem"
                : breakpoints["900"]
                ? "50rem"
                : breakpoints["1100"]
                ? "60rem"
                : "85rem"
            }
            highlightColor={highlightColor}
          />
        )}
      </Swiper>
    </section>
  );
};

export default MainSlider;
