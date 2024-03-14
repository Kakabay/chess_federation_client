// Modules
// import { Link } from "react-router-dom";

// Icons
// import arrowNext from "../../icons/arrow-right-white.svg";

// Types
import { SlideProps } from '../../types/mainSliderSlide';

// URL
import { hosting } from '../../links';

const MainSliderSlide = ({ id, img, header, txt }: SlideProps) => {
  return (
    <div className="swiper-slide-inner" id={id + ''}>
      <div className="swiper-bg">
        <img src={hosting + img} alt="" />
      </div>
      <div className="swiper-darkener"></div>
      <div className="swiper-slide-content">
        <div className="container">
          <div className="swiper-slider-content-inner">
            <h3>{header}</h3>
            <p>{txt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSliderSlide;
