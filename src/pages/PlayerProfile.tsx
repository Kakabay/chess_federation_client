// Modules
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { ErrorBoundary } from "react-error-boundary";

// Helpers
import { getPlayerInfo } from "../helpers/apiRequests";
import { highlightColor } from "../helpers/otherVariables";

// Hooks
import useMediaQuery from "../hooks/useMediaQuery";

// Links
import { hosting } from "../links";
import { players } from "../links";

// Components
import EmptyState from "../components/global/EmptyState";

// Types
import { PlayersData } from "../types/players";

const PlayerProfile = () => {
  const [playerInfo, setPlayerInfo]: [
    PlayersData,
    React.Dispatch<PlayersData>
  ] = useState({
    id: -1,
    title: "",
    name: "",
    national: -1,
    img: "",
    classic: -1,
    rapid: -1,
    blitz: -1,
    birthday: -1,
  });
  const { playerId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlayerInfo(setPlayerInfo, `${players}/${playerId}`);
  }, [playerId]);

  const breakpoints: Record<number, boolean> = {
    1200: useMediaQuery("(max-width: 1200px)"),
    750: useMediaQuery("(max-width: 750px)"),
  };

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="pp">
        <div className="container">
          <div className="pp-inner">
            <div className={playerInfo.id === -1 ? "pp-left" : "pp-left ready"}>
              {playerInfo.id !== -1 ? (
                <div>
                  <img
                    src={hosting + "/storage/app/media" + playerInfo.img}
                    alt=""
                  />
                </div>
              ) : (
                <Skeleton
                  highlightColor={highlightColor}
                  height={breakpoints["1200"] ? "43.8rem" : "100%"}
                  width={"100%"}
                  style={{ maxWidth: "35rem" }}
                />
              )}
            </div>
            <div className="pp-right">
              <div className="pp-right-top">
                {playerInfo.id !== -1 ? (
                  <h3>{playerInfo.name}</h3>
                ) : (
                  <Skeleton
                    highlightColor={highlightColor}
                    width={"100%"}
                    style={{ maxWidth: breakpoints["750"] ? "unset" : "23rem" }}
                    height={"3.8rem"}
                  />
                )}
                <div className="pp-right-top-content">
                  <ul>
                    {playerInfo.id !== -1 ? (
                      <li>
                        <span className="pp-identifier">ID</span>
                        <p>{playerInfo.id}</p>
                      </li>
                    ) : (
                      <li>
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                      </li>
                    )}
                    {playerInfo.id !== -1 ? (
                      <li>
                        <span className="pp-identifier">Звание</span>
                        <p>
                          {/* {playerInfo[0].title} */}
                          Гроссмейстер
                        </p>
                      </li>
                    ) : (
                      <li>
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                      </li>
                    )}
                    {playerInfo.id !== -1 ? (
                      <li>
                        <span className="pp-identifier">Год рождения</span>
                        <p>{playerInfo.birthday}</p>
                      </li>
                    ) : (
                      <li>
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="pp-right-bottom">
                <h3>
                  {playerInfo.id !== -1 ? (
                    "Rating"
                  ) : (
                    <Skeleton
                      highlightColor={highlightColor}
                      width={"100%"}
                      style={{
                        maxWidth: breakpoints["750"] ? "unset" : "23rem",
                      }}
                      height={"3.8rem"}
                    />
                  )}
                </h3>
                <div className="pp-right-bottom-content">
                  <ul>
                    {playerInfo.id !== -1 ? (
                      <li>
                        <span className="pp-identifier">Classic</span>
                        <p>{playerInfo.classic}</p>
                      </li>
                    ) : (
                      <li>
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                      </li>
                    )}
                    {playerInfo.id !== -1 ? (
                      <li>
                        <span className="pp-identifier">Rapid</span>
                        <p>
                          {playerInfo.rapid}
                          2847
                        </p>
                      </li>
                    ) : (
                      <li>
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                      </li>
                    )}
                    {playerInfo.id !== -1 ? (
                      <li>
                        <span className="pp-identifier">Blitz</span>
                        <p>
                          {playerInfo.blitz}
                          2847
                        </p>
                      </li>
                    ) : (
                      <li>
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                        <Skeleton
                          highlightColor={highlightColor}
                          width={"100%"}
                          style={{
                            maxWidth: breakpoints["750"] ? "unset" : "20rem",
                          }}
                          height={"5.2rem"}
                        />
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default PlayerProfile;
