// Modules
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { v4 as uuidv4 } from 'uuid';
import Skeleton from 'react-loading-skeleton';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import VideoPlayer from '../global/VideoPlayer';
import Calendar from '../global/Calendar';
import EmptyState from '../global/EmptyState';

// Types
import { playerType } from '../../types/players';
import { Video } from '../../types/video';

// Helpers
import { getVideos } from '../../helpers/apiRequests';
import { hosting } from '../../links';
import { highlightColor } from '../../helpers/otherVariables';

// Hooks
import useMediaQuery from '../../hooks/useMediaQuery';

const CalendarSection = () => {
  const [video, setVideo]: playerType = useState('');
  const [activeVideo, setActiveVideo] = useState<number>(1);
  const [videoData, setVideoData]: [Video[], React.Dispatch<Video[]>] = useState([
    {
      id: -1,
      video: '',
      poster: '',
    },
  ]);

  const widthBounds: boolean = useMediaQuery('(max-width: 750px)');

  useEffect(() => {
    getVideos(setVideoData, setVideo, setActiveVideo);
  }, []);

  return (
    <section className="calendars-outer">
      <div className="container">
        <div className="calendars">
          <div className="calendars-left">
            {video.length !== 0 ? (
              <ErrorBoundary fallback={<EmptyState />}>
                <VideoPlayer videoUrl={video} />
              </ErrorBoundary>
            ) : (
              <Skeleton
                highlightColor={highlightColor}
                height={'51.2rem'}
                style={{ borderRadius: '0.5rem' }}
              />
            )}
            <div className="slider-video">
              <Swiper
                modules={[]}
                spaceBetween={24}
                autoHeight={true}
                slidesPerView={widthBounds ? 2 : 3}
                loop={false}>
                {videoData[0].id !== -1
                  ? videoData.map((vid: Video, index) => {
                      if (vid.id !== activeVideo) {
                        return (
                          <SwiperSlide key={uuidv4()}>
                            <div
                              key={uuidv4()}
                              className={`video-slide ${
                                activeVideo === index + 1 ? 'active-video-slide' : ''
                              }`}
                              onClick={() => {
                                setVideo(vid.video);
                                setActiveVideo(vid.id);
                              }}>
                              <img src={hosting + vid.poster} alt="" />
                            </div>
                          </SwiperSlide>
                        );
                      }
                    })
                  : ['', '', ''].map(() => {
                      return (
                        <SwiperSlide key={uuidv4()}>
                          <Skeleton
                            highlightColor={highlightColor}
                            height={'16rem'}
                            style={{ borderRadius: '0.5rem' }}
                          />
                        </SwiperSlide>
                      );
                    })}
              </Swiper>
            </div>
          </div>
          <div className="calendars-right">
            <ErrorBoundary fallback={<EmptyState />}>
              <Calendar />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
