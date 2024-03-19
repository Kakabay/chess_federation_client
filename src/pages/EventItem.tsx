// Modules
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { ErrorBoundary } from "react-error-boundary";

// Components
import EventAside from "../components/event_item/EventAside";
// import EventDate from "../components/global/EventDate";
import EmptyState from "../components/global/EmptyState";

// Helpers
import { getEvent } from "../helpers/apiRequests";
import { highlightColor } from "../helpers/otherVariables";

// Types
import { eventType } from "../types/events";
type stateBool = [boolean, React.Dispatch<boolean>];

const EventItem = () => {
  const [loader, setLoader]: stateBool = useState(true);
  const [eventData, setEventData]: [eventType, React.Dispatch<eventType>] =
    useState({
      id: -1,
      title: "",
      excerpt: "",
      published_at: "",
      featured_images: [
        {
          id: -1,
          disk_name: "",
          file_name: "",
          path: "",
          extension: "",
        },
      ],
      content_html: "",
    });

  const { eventId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoader(true);
    getEvent(eventId, setEventData, setLoader);
  }, [eventId]);

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="eventitem">
        <div className="container">
          <div className="eventitem-inner">
            <div className="eventitem-content">
              {eventData.id !== -1 && !loader ? (
                <div className="eventitem-top">
                  {/* <EventDate time={"00:00"} date={eventData.published_at} /> */}
                  <h2>{eventData.title}</h2>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Skeleton highlightColor={highlightColor} height={"2rem"} />
                  <Skeleton highlightColor={highlightColor} height={"4rem"} />
                  <Skeleton
                    highlightColor={highlightColor}
                    height={"47.8rem"}
                    style={{
                      borderRadius: "0.5rem",
                      padding: "2.2rem 0 ",
                      display: "block",
                    }}
                  />
                  <Skeleton
                    highlightColor={highlightColor}
                    count={15}
                    height={"2rem"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                    }}
                  />
                </div>
              )}
              {eventData.id !== -1 && !loader ? (
                <div className="eventitem-bottom">
                  <div className="eventitem-img">
                    <img src={eventData.featured_images[0].path} alt="" />
                  </div>
                  <div
                    className="eventitem-content"
                    dangerouslySetInnerHTML={{ __html: eventData.content_html }}
                  ></div>
                </div>
              ) : (
                ""
              )}
            </div>
            <ErrorBoundary fallback={<EmptyState />}>
              <EventAside />
            </ErrorBoundary>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default EventItem;
