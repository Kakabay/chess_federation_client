import { ErrorBoundary } from 'react-error-boundary';
import EmptyState from '../components/global/EmptyState';
import PageTItle from '../components/global/PageTItle';
import TournamentsImg from '../images/tournaments-img.png';
import TournamentItem from '../components/tournaments/TournamentItem';
import { v4 } from 'uuid';
import TournamentBlock from '../components/tournaments/TournamentBlock';

const Tournaments = () => {
  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="tournaments-page">
        <div className="container">
          <div className="tournaments-page-inner">
            <header className="tournaments-header">
              <div className="tournaments-img">
                <img src={TournamentsImg} alt="Предстоящие события" />
              </div>
              <PageTItle
                title="Предстоящие события"
                type="big"
                descripter="Список предстоящих шахматных событий в Туркменистане"
              />
            </header>
            <div className="tournaments-list">
              <TournamentBlock />
              <TournamentBlock />
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Tournaments;
