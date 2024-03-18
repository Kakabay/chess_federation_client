import SectionTitle from '../global/SectionTitle';
import TournamentItem from '../global/TournamentItem';

const TournamentsSection = () => {
  return (
    <section className="tournaments">
      <div className="container">
        <div className="tournaments-inner">
          <SectionTitle icon="horse" title="Предстоящие события" />
          <div className="tournaments-content">
            <TournamentItem />
            <TournamentItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
