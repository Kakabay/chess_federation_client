// Modules
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";

// Components
import Event from "../global/Event";

// Helpers
import { getAsidePosts } from "../../helpers/apiRequests";
import { highlightColor } from "../../helpers/otherVariables";

// Types
import { eventType } from "../../types/eventProps";

const EventAside = () => {
  // State
  const [events, setEvents]: eventType = useState({
    data: [
      {
        id: -1,
        title: "",
        published_at: "",
        featured_images: [
          {
            id: -1,
            path: "",
          },
        ],
        content_html: "",
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
    getAsidePosts(setEvents);
  }, []);
  return (
    <aside className="latest">
      <h2 className="latest-title">Последние новости</h2>
      <div className="latest-content">
        {events.loaded
          ? events.data.map((evnt) => {
              return (
                <Event
                  key={uuidv4()}
                  id={evnt.id}
                  image={evnt.featured_images[0].path}
                  title={evnt.title}
                  time={"00:00"}
                  date={evnt.published_at}
                />
              );
            })
          : ["", "", "", ""].map(() => (
              <div
                key={uuidv4()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Skeleton
                  highlightColor={highlightColor}
                  height={"30rem"}
                  style={{ borderRadius: "0.5rem" }}
                />
                <Skeleton highlightColor={highlightColor} height={"2rem"} />
                <Skeleton highlightColor={highlightColor} height={"4rem"} />
              </div>
            ))}
      </div>
    </aside>
  );
};

export default EventAside;
