// Icons

// Types
import { eventTimeProps } from '../../types/eventProps';

const EventDate = ({ date }: eventTimeProps) => {
  return (
    <div className="event-date">
      <span className="event-day">{date}</span>
    </div>
  );
};

export default EventDate;
