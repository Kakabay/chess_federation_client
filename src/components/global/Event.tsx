// Modules
import { Link } from 'react-router-dom';

// Components
import EventDate from './EventDate';

// Types
import { eventProp } from '../../types/eventProps';

const Event = ({ id, image, date, title }: eventProp) => {
  return (
    <Link to={`/event/${id}`} className="event">
      <EventDate date={date} />
      <h3 className="event-title">{title}</h3>
      <div className="event-img">
        <img src={image} alt="" />
      </div>
    </Link>
  );
};

export default Event;
