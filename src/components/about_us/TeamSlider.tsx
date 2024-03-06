// Modules
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// Helpers
import { getTeam } from "../../helpers/apiRequests";
import { hosting } from "../../links";
import { highlightColor } from "../../helpers/otherVariables";

// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";

// Icons
import arrowPrev from "../../icons/arrow-left-green.svg";
import arrowNext from "../../icons/arrow-right-green.svg";
import Skeleton from "react-loading-skeleton";

// Types
import { PlayersData } from "../../types/players";

const TeamSlider = () => {
  const [team, setTeam]: [PlayersData[], React.Dispatch<PlayersData[]>] =
    useState([
      {
        id: -1,
        title: "",
        name: "",
        national: -1,
        img: "",
        classic: -1,
        rapid: -1,
        blitz: -1,
        birthday: -1,
      },
    ]);

  useEffect(() => {
    getTeam(setTeam);
  }, []);

  const breakpoints: Record<number, boolean> = {
    1200: useMediaQuery("(max-width: 1200px)"),
    860: useMediaQuery("(max-width: 860px)"),
    500: useMediaQuery("(max-width: 500px)"),
  };

  return (
    <div className="team">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={48}
        slidesPerView={
          breakpoints["500"]
            ? 1
            : breakpoints["860"]
            ? 2
            : breakpoints["1200"]
            ? 3
            : 4
        }
        loop={true}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
      >
        {team[0].id !== -1
          ? team.map((el: PlayersData) => {
              if (el.national) {
                return (
                  <SwiperSlide key={uuidv4()}>
                    <Link to={`/player/${el.id}`} className="team-slide">
                      <div className="team-img">
                        {el.img ? <img src={hosting + el.img} alt="" /> : null}
                      </div>
                      <h4>{el.name}</h4>
                    </Link>
                  </SwiperSlide>
                );
              }
              return null;
            })
          : ["", "", "", "", "", ""].map(() => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <div className="team-skeleton">
                    <Skeleton
                      width={"100%"}
                      height={"35rem"}
                      highlightColor={highlightColor}
                    />
                    <Skeleton
                      width={"20rem"}
                      height={"2.5rem"}
                      highlightColor={highlightColor}
                    />
                  </div>
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
  );
};

export default TeamSlider;
