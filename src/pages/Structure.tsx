// Modules
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { v4 as uuidv4 } from "uuid";
import { ErrorBoundary } from "react-error-boundary";

// Components
import EmptyState from "../components/global/EmptyState";
import PersonInfo from "../components/structure/PersonInfo";
import SectionTitle from "../components/global/SectionTitle";

// Helpers
import { getStructure } from "../helpers/apiRequests";
import { highlightColor } from "../helpers/otherVariables";

// Links
import { hosting } from "../links";

// Types
import { structureType } from "../types/structure";

const Structure = () => {
  const [structureData, setStructureData]: [
    structureType[],
    React.Dispatch<structureType[]>
  ] = useState([
    {
      id: -1,
      job: "",
      name: "",
      email: "",
      phone: "",
      facebook: "",
      img: "",
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
    getStructure(setStructureData);
  }, []);

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="structure">
        <div className="container">
          <div className="structure-inner">
            <SectionTitle title={"Структура федерации"} />
            {structureData[0].id !== -1 ? (
              <div className="structure-content">
                {structureData.map((person: structureType) => {
                  return (
                    <PersonInfo
                      key={uuidv4()}
                      img={hosting + person.img}
                      email={person.email}
                      name={person.name}
                      position={person.job}
                      tel={person.phone}
                      facebook={person.facebook}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="skeleton-structure">
                {["", "", "", "", "", ""].map(() => (
                  <div
                    className="person"
                    key={uuidv4()}
                    style={{ width: "100%" }}
                  >
                    <div
                      className="person-left"
                      style={{ width: "100%", maxWidth: "20rem" }}
                    >
                      <Skeleton
                        height={"25rem"}
                        width={"100%"}
                        highlightColor={highlightColor}
                      />
                    </div>
                    <div
                      className="person-right"
                      style={{ width: "100%", maxWidth: "60%" }}
                    >
                      <Skeleton
                        height={"3.3rem"}
                        width={"70%"}
                        highlightColor={highlightColor}
                      />
                      <Skeleton
                        height={"3.8rem"}
                        width={"80%"}
                        highlightColor={highlightColor}
                      />
                      <div className="person-right-bottom">
                        <Skeleton
                          height={"2.2rem"}
                          width={"80%"}
                          highlightColor={highlightColor}
                        />
                        <Skeleton
                          height={"2.2rem"}
                          width={"80%"}
                          highlightColor={highlightColor}
                        />
                        <Skeleton
                          height={"2.2rem"}
                          width={"80%"}
                          highlightColor={highlightColor}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Structure;
