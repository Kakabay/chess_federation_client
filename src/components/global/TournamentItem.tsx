import { dateParser } from "../../helpers/dateParser";

interface TournamentItemProps {
  startTime: string;
  endTime: string;
  place: string;
  tourName: string;
}

const TournamentItem = ({
  startTime,
  endTime,
  place,
  tourName,
}: TournamentItemProps) => {
  return (
    <div className="tournament-item">
      <div className="tournament-item-date">
        <h4 className="tournament-item-date-item">
          <span>{dateParser(startTime, false)[0]}</span>
          {dateParser(startTime, false)[1]}
        </h4>
        <div className="tournament-item-date-divider"></div>
        <h4 className="tournament-item-date-item">
          <span>{dateParser(startTime, false)[0]}</span>
          {dateParser(startTime, false)[1]}
        </h4>
      </div>
      <div className="tournament-item-content">
        <h3 className="tournament-item-title">{tourName}</h3>
        <h4 className="tournament-item-subtitle">{place}</h4>
      </div>
    </div>
  );
};

export default TournamentItem;
