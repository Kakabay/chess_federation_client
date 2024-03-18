// Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

// Components
import SectionTitle from '../global/SectionTitle';

// Icons
import arrowPrev from '../../icons/arrow-left-green.svg';
import arrowNext from '../../icons/arrow-right-green.svg';

// URL
import { hosting } from '../../links';

// Types
import { partnersType } from '../../types/partnersType';

// Helpers
import { getPartnerSliderData } from '../../helpers/apiRequests';
import { highlightColor } from '../../helpers/otherVariables';

// Hooks
import useMediaQuery from '../../hooks/useMediaQuery';

const Partners = () => {
  // State
  const [partnerData, setPartnerData]: [
    partnersType[],
    React.Dispatch<React.SetStateAction<partnersType[]>>,
  ] = useState([{ id: -1, note: '', partner: '' }]);

  // Effect
  useEffect(() => {
    getPartnerSliderData(setPartnerData);
  }, []);

  // Width
  const widthBounds: Record<number, boolean> = {
    1200: useMediaQuery('(max-width: 1200px)'),
    860: useMediaQuery('(max-width: 860px)'),
    500: useMediaQuery('(max-width: 500px)'),
  };

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-inner">
          <SectionTitle title={'Партнеры'} icon="bishop" />
          <div className="partners-content">
            <Swiper
              modules={[Navigation, Autoplay, FreeMode]}
              autoplay={{ delay: 3000 }}
              spaceBetween={0}
              slidesPerView={
                widthBounds['500'] ? 1 : widthBounds['860'] ? 2 : widthBounds['1200'] ? 3 : 4
              }
              loop={true}
              freeMode={!widthBounds['500']}
              navigation={{
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
              }}>
              {partnerData.length > 0 && partnerData[0].partner.length > 0
                ? partnerData.map((image: partnersType) => {
                    return (
                      <SwiperSlide key={uuidv4()}>
                        <div className="partners-slide">
                          <img src={hosting + image.partner} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })
                : ['', '', '', '', '', ''].map(() => {
                    return (
                      <SwiperSlide key={uuidv4()}>
                        <Skeleton
                          height={'18rem'}
                          highlightColor={highlightColor}
                          style={{
                            borderRadius: '0.5rem',
                            border: '0.1rem solid #00000033',
                          }}
                        />
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
            <div className="slider-prev slider-next-white slider-next-white-prev">
              <img src={arrowPrev} alt="" />
            </div>
            <div className="slider-next slider-next-white slider-next-white-next">
              <img src={arrowNext} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
