// Modules
import { ErrorBoundary } from "react-error-boundary";

// Components
import SectionTitle from "../global/SectionTitle";
import SearchTable from "../global/SearchTable";
import EmptyState from "../global/EmptyState";

const PlayerRating = () => {
  return (
    <section className="rating">
      <div className="container">
        <div className="rating-inner">
          <SectionTitle title={"Рейтинг игроков"} />
          <div className="rating-content">
            <ErrorBoundary fallback={<EmptyState />}>
              <SearchTable />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerRating;
