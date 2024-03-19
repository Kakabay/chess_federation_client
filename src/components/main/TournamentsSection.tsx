import { useEffect, useState } from "react";
import { getEvents } from "../../helpers/apiRequests";
import SectionTitle from "../global/SectionTitle";
import TournamentItem from "../global/TournamentItem";
import { Tournaments } from "../../types/tournaments";
import { v4 } from "uuid";

const TournamentsSection = () => {
  const months = [
    {
      number: 1,
      name: "Январь",
    },
    {
      number: 2,
      name: "Февраль",
    },
    {
      number: 3,
      name: "Март",
    },
    {
      number: 4,
      name: "Апрель",
    },
    {
      number: 5,
      name: "Май",
    },
    {
      number: 6,
      name: "Июнь",
    },
    {
      number: 7,
      name: "Июль",
    },
    {
      number: 8,
      name: "Август",
    },
    {
      number: 9,
      name: "Сентябрь",
    },
    {
      number: 10,
      name: "Октябрь",
    },
    {
      number: 11,
      name: "Ноябрь",
    },
    {
      number: 12,
      name: "Декабрь",
    },
  ];

  const [tourData, setTourData] = useState<Tournaments>();

  useEffect(() => {
    getEvents(setTourData);
  }, []);

  console.log(tourData?.data);

  return (
    <section className="tournaments">
      <div className="container">
        <div className="tournaments-inner">
          <SectionTitle icon="horse" title="Предстоящие события" />
          <div className="tournaments-content">
            {tourData?.data
              ? tourData.data[0].events.map((tour) => (
                  <TournamentItem
                    endTime={tour.end}
                    place={tour.place}
                    tourName={tour.name}
                    startTime={tour.start}
                    key={v4()}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
