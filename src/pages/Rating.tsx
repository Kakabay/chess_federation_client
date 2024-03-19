// Modules
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";
import { ErrorBoundary } from "react-error-boundary";

// Components
import SectionTitle from "../components/global/SectionTitle";
import SearchTable from "../components/global/SearchTable";
import EmptyState from "../components/global/EmptyState";

// Helpers
import { getTeam } from "../helpers/apiRequests";
import { highlightColor } from "../helpers/otherVariables";

// Hooks
import useMediaQuery from "../hooks/useMediaQuery";

// Links
import { hosting } from "../links";

// Types
import { PlayersData } from "../types/players";

const Rating = () => {
  const [players, setPlayers]: [PlayersData[], React.Dispatch<PlayersData[]>] =
    useState([
      {
        id: -1,
        title: "",
        name: "",
        national: -1,
        img: "",
        classic: -1,
        rapid: -1,
        blitz: -1,
        birthday: -1,
      },
    ]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getTeam(setPlayers);
  }, []);

  const breakpoints: Record<number, boolean> = {
    800: useMediaQuery("(max-width: 800px)"),
    600: useMediaQuery("(max-width: 600px)"),
  };

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="rating">
        <div className="container">
          <div className="rating-inner">
            <SectionTitle title={"Лучшие игроки"} icon="bishop" />
            <div className="rating-content">
              <div
                className={players ? "rating-banner" : "rating-banner disabled"}
              >
                {players[0].id !== -1
                  ? players.map((player: PlayersData) => {
                      if (player.national === 0) {
                        return (
                          <Link
                            key={uuidv4()}
                            className="rating-banner-block"
                            to={`/player/${player.id}`}
                          >
                            <div className="rating-banner-img">
                              <img src={hosting + player.img} alt="" />
                            </div>
                            <div className="rating-banner-text">
                              <h4>{player.name}</h4>
                              <h5>{player.classic}</h5>
                            </div>
                          </Link>
                        );
                      }
                      return null;
                    })
                  : ["", "", "", ""].map(() => {
                      return (
                        <div className="player-skeleton" key={uuidv4()}>
                          <Skeleton
                            highlightColor={highlightColor}
                            height={breakpoints["800"] ? "25rem" : "43.8rem"}
                            width={"100%"}
                            style={{
                              marginBottom: breakpoints["600"]
                                ? "0.8rem"
                                : "2.4rem",
                            }}
                          />
                          <Skeleton
                            highlightColor={highlightColor}
                            height={"2.5rem"}
                            width={"100%"}
                            style={{
                              maxWidth: "14.8rem",
                              justifySelf: "center",
                            }}
                          />
                          <Skeleton
                            highlightColor={highlightColor}
                            height={"2.5rem"}
                            width={"100%"}
                            style={{
                              maxWidth: "4.2rem",
                              justifySelf: "center",
                            }}
                          />
                        </div>
                      );
                    })}
              </div>
              <SearchTable />
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Rating;
