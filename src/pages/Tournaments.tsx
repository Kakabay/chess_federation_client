// Modules
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";
import { ErrorBoundary } from "react-error-boundary";

// Helpers
import { getEvents } from "../helpers/apiRequests";
import { dateParser } from "../helpers/dateParser";
import { highlightColor } from "../helpers/otherVariables";

// Components
import EmptyState from "../components/global/EmptyState";
import SectionTitle from "../components/global/SectionTitle";
import Tournament from "../components/tournaments/Tournament";

// Images
import match from "../images/match.jpg";

// Types
import { tournamentType } from "../types/events";

const Tournaments = () => {
  const [tournaments, setTournaments]: [
    tournamentType[],
    React.Dispatch<tournamentType[]>
  ] = useState([
    {
      id: -1,
      current: -1,
      header: "",
      events: [
        {
          start: "",
          end: "",
          name: "",
          place: "",
          img: "",
        },
      ],
      translations: [
        {
          model_id: "",
          locale: "",
          attribute_data: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents(setTournaments);
  }, []);

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="tournaments">
        <div className="tournaments-banner">
          <div className="container">
            <div className="tournaments-title">
              <SectionTitle title="Турниры" />
            </div>
          </div>
          <div className="container">
            <div className="tournaments-banner-inner">
              {tournaments[0].id !== -1 ? (
                tournaments.map((tournament: tournamentType) => {
                  if (tournament.current === 1) {
                    return (
                      <div
                        key={uuidv4()}
                        className="tournaments-head"
                        style={{
                          background: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.9) 0.01%, rgba(0, 0, 0, 0.4) 100%), url(${match}), no-repeat`,
                        }}
                      >
                        <span>{`${dateParser(
                          tournament.events[0].start.split(" ")[0]
                        )} - ${dateParser(
                          tournament.events[0].end.split(" ")[0]
                        )}`}</span>
                        <h2>{tournament.events[0].name}</h2>
                        <span>{tournament.events[0].place}</span>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <Skeleton
                  highlightColor={highlightColor}
                  width={"100%"}
                  height={"36.2rem"}
                />
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tournaments-inner">
            <div className="tournaments-wrapper">
              <div className="tournaments-lower">
                {tournaments[0].id !== -1
                  ? tournaments.map((tournament: tournamentType) => {
                      if (tournament.current !== 1) {
                        return (
                          <Tournament
                            key={uuidv4()}
                            img={match}
                            name={tournament.events[0].name}
                            start={dateParser(
                              tournament.events[0].start.split(" ")[0]
                            )}
                            end={dateParser(
                              tournament.events[0].end.split(" ")[0]
                            )}
                            place={tournament.events[0].place}
                          />
                        );
                      }
                      return null;
                    })
                  : ["", "", "", "", "", ""].map(() => {
                      return (
                        <div key={uuidv4()}>
                          <Skeleton
                            highlightColor={highlightColor}
                            width={"100%"}
                            height={"26rem"}
                            style={{ marginBottom: "3.2rem" }}
                          />
                          <Skeleton
                            highlightColor={highlightColor}
                            width={"100%"}
                            height={"2.5rem"}
                          />
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Tournaments;
