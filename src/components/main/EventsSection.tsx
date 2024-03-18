// Modules
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skeleton from 'react-loading-skeleton';

// Components
import SectionTitle from '../global/SectionTitle';
import Event from '../global/Event';

// Helpers
import { getMainPosts } from '../../helpers/apiRequests';
import { highlightColor } from '../../helpers/otherVariables';

// Types
import { eventType } from '../../types/eventProps';

const EventsSection = () => {
  // State
  const [events, setEvents]: eventType = useState({
    data: [
      {
        id: -1,
        title: '',
        published_at: '',
        featured_images: [
          {
            id: -1,
            path: '',
          },
        ],
        content_html: '',
      },
    ],
    links: {
      prev: null,
      next: null,
    },
    meta: {
      current_page: -1,
      total: -1,
    },
    loaded: false,
  });

  useEffect(() => {
    getMainPosts(setEvents);
  }, []);

  return (
    <section className="events">
      <div className="container">
        <div className="events-inner">
          <SectionTitle title="События и новости" icon="rook" linkName="все события" link="/news" />
          <div className="events-content">
            {events.loaded && events.data[0].featured_images.length > 0
              ? events.data.map((evnt, index) =>
                  index <= 2 ? (
                    <Event
                      key={uuidv4()}
                      id={evnt.id}
                      image={evnt.featured_images[0].path}
                      title={evnt.title}
                      time={'00:00'}
                      date={evnt.published_at}
                    />
                  ) : null,
                )
              : ['', '', '', '', '', ''].map(() => (
                  <div
                    key={uuidv4()}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}>
                    <Skeleton
                      highlightColor={highlightColor}
                      height={'30rem'}
                      style={{ borderRadius: '0.5rem' }}
                    />
                    <Skeleton highlightColor={highlightColor} height={'2rem'} />
                    <Skeleton highlightColor={highlightColor} height={'4rem'} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
