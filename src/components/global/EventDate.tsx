// Icons
import divider from "../../icons/divider.svg";

// Types
import { eventTimeProps } from "../../types/eventProps";

const EventDate = ({ time, date }: eventTimeProps) => {
  return (
    <div className="event-date">
      <span className="event-time">{time}</span>
      <span className="event-divider">
        <img src={divider} alt="" />
      </span>
      <span className="event-day">{date}</span>
    </div>
  );
};

export default EventDate;
