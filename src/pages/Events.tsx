// Modules
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skeleton from 'react-loading-skeleton';
import { ErrorBoundary } from 'react-error-boundary';

// Icons
import left from '../icons/arr-left.svg';
import right from '../icons/arr-right.svg';

// Components
import Event from '../components/global/Event';
import SectionTitle from '../components/global/SectionTitle';
import EmptyState from '../components/global/EmptyState';

// Types
import { eventType } from '../types/eventProps';

// Helpers
import { getAllPosts } from '../helpers/apiRequests';
import { highlightColor } from '../helpers/otherVariables';
import useMediaQuery from '../hooks/useMediaQuery';
import PageTItle from '../components/global/PageTItle';

const Events = () => {
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
    window.scrollTo(0, 0);
    getAllPosts(setEvents);
  }, []);

  const breakpoints = useMediaQuery('(max-width: 550px');

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="events-page">
        <div className="container">
          <div className="event-page-wrapper">
            <PageTItle title={'Новости'} type="normal" />
            <div className="events-page-inner">
              {events.loaded && events.data[0].featured_images.length > 0
                ? events.data.map((evnt) => {
                    return (
                      <Event
                        key={uuidv4()}
                        id={evnt.id}
                        image={evnt.featured_images[0].path}
                        title={evnt.title}
                        time={'00:00'}
                        date={evnt.published_at}
                      />
                    );
                  })
                : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''].map(() => (
                    <div
                      key={uuidv4()}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}>
                      <Skeleton
                        height={breakpoints ? '25rem' : '30rem'}
                        highlightColor={highlightColor}
                        style={{ borderRadius: '0.5rem' }}
                      />
                      <Skeleton height={'2rem'} highlightColor={highlightColor} />
                      <Skeleton height={'4rem'} highlightColor={highlightColor} />
                    </div>
                  ))}
            </div>
            <div className="events-page-bottom">
              <div className="events-page-nav">
                <div className="events-page-nav-left">
                  {events.data[0].id !== -1 ? (
                    <button
                      type="button"
                      className="events-page-btn"
                      disabled={events.meta.current_page < 2 ? true : false}>
                      <img src={left} alt="" />
                    </button>
                  ) : (
                    <Skeleton height={'5rem'} width={'5rem'} />
                  )}

                  <span className="event-page-number">
                    {events.meta.current_page > -1 ? (
                      events.meta.current_page
                    ) : (
                      <Skeleton height={'2rem'} width={'2rem'} />
                    )}
                  </span>
                  {events.data[0].id !== -1 ? (
                    <button
                      type="button"
                      className="events-page-btn"
                      disabled={events.meta.current_page === events.meta.total - 1 ? true : false}>
                      <img src={right} alt="" />
                    </button>
                  ) : (
                    <Skeleton height={'5rem'} width={'5rem'} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Events;
