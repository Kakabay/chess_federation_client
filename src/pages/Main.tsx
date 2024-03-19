// Modules
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Components
import MainSlider from "../components/main/MainSlider";
import EventsSection from "../components/main/EventsSection";
import EmptyState from "../components/global/EmptyState";
import TournamentsSection from "../components/main/TournamentsSection";
import VideoSection from "../components/main/VideoSection";
import RatingSection from "../components/main/RatingSection";
import PartnersSection from "../components/main/PartnersSection";

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
          <TournamentsSection />
        </ErrorBoundary>
        <ErrorBoundary fallback={<EmptyState />}>
          <EventsSection />
        </ErrorBoundary>
        <ErrorBoundary fallback={<EmptyState />}>
          <VideoSection />
        </ErrorBoundary>
        <ErrorBoundary fallback={<EmptyState />}>
          <RatingSection />
        </ErrorBoundary>
        <ErrorBoundary fallback={<EmptyState />}>
          <PartnersSection />
        </ErrorBoundary>

        {/* <ErrorBoundary fallback={<EmptyState />}>
          <Partners />
        </ErrorBoundary> */}
      </main>
    </ErrorBoundary>
  );
};

export default Main;
