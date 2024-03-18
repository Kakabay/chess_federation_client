// Modules
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import MainSlider from '../components/main/MainSlider';
import EventsSection from '../components/main/EventsSection';
import PlayerRating from '../components/main/PlayerRatingSection';
import Partners from '../components/main/PartnersSection';
import CalendarSection from '../components/main/CalendarSection';
import EmptyState from '../components/global/EmptyState';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="main">
        <ErrorBoundary fallback={<EmptyState />}>
          <MainSlider />
        </ErrorBoundary>
        <ErrorBoundary fallback={<EmptyState />}>
          <EventsSection />
        </ErrorBoundary>
        <ErrorBoundary fallback={<EmptyState />}>{/* <CalendarSection /> */}</ErrorBoundary>

        {/* Not wrapping PlayerRating since it is not a component that may break */}
        <PlayerRating />
        {/* Not wrapping PlayerRating since it is not a component that may break */}

        <ErrorBoundary fallback={<EmptyState />}>
          <Partners />
        </ErrorBoundary>
      </main>
    </ErrorBoundary>
  );
};

export default Main;
