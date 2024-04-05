import { useEffect, useState } from 'react';
import { getEvents } from '../../helpers/apiRequests';
import SectionTitle from '../global/SectionTitle';
import { Tournaments } from '../../types/tournaments';
import { v4 } from 'uuid';
import TournamentItem from '../tournaments/TournamentItem';

const TournamentsSection = () => {
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
