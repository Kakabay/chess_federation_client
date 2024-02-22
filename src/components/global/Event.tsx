// Modules
import { Link } from "react-router-dom";

// Components
import EventDate from "./EventDate";

// Types
import { eventProp } from "../../types/eventProps";

const Event = ({ id, image, time, date, title }: eventProp) => {
  return (
    <Link to={`/event/${id}`} className="event">
      <div className="event-top">
        <div className="event-img">
          <img src={image} alt="" />
        </div>
        <EventDate time={time} date={date} />
      </div>
      <div className="event-bottom">
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Event;
